import React, { useEffect, useRef } from 'react';
import cn from 'classnames';

import styles from './AppSelectItem.module.scss';

import type { AppSelectOption } from '../AppSelect';

export type AppSelectItemProps<T extends string = string> = {
  item: AppSelectOption<T>;
  selected?: boolean;
  active?: boolean;
  readonly?: boolean;
  onClick?: (id: T) => void;
};

function AppSelectItem<T extends string>({
  item,
  selected,
  active,
  readonly,
  onClick = () => {},
}: AppSelectItemProps<T>): React.ReactElement {
  const selectItemRef = useRef<HTMLButtonElement>(null);

  const className = cn(
    styles.AppSelectItem,
    selected && styles['AppSelectItem--selected'],
    active && styles['AppSelectItem--active'],
    readonly && styles['AppSelectItem--readonly'], //
  );

  // TODO: Scroll functionality can be uncommented or removed based on need
  // const scrollToActiveItem = (): void => {
  //   if (!active || !selectItemRef.current) return;
  //   selectItemRef.current.scrollIntoView({
  //     block: 'center',
  //     behavior: 'smooth',
  //   });
  // };
  //
  // const scrollToSelectedItem = (): void => {
  //   if (!selected || !selectItemRef.current) return;
  //   selectItemRef.current.scrollIntoView({
  //     block: 'center',
  //   });
  // };
  //
  // useEffect(scrollToActiveItem, [active]);
  //
  // useEffect(() => {
  //   setTimeout(scrollToSelectedItem, 100);
  // }, []);

  return (
    <button
      type="button"
      ref={selectItemRef}
      className={className}
      onClick={() => onClick(item.id)}
      onPointerDown={e => e.preventDefault()}
    >
      {item.title}
    </button>
  );
}

export default AppSelectItem;

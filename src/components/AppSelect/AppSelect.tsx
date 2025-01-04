import React, { useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';

import styles from './AppSelect.module.scss';
import AppSelectDropdown from '@/components/AppSelect/AppSelectDropdown/AppSelectDropdown'; // Assuming you're using CSS Modules

export type AppSelectProps<T extends string = string> = {
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  value: T;
  options: AppSelectOption<T>[];
  placeholder?: string;
  disabled?: boolean;
  touched?: boolean;
  error?: string;
  note?: string;
  onSelect: (value: T) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
};

export type AppSelectOption<T extends string = string> = {
  id: T;
  title: string;
};

function AppSelect<T extends string>({
  name,
  size = 'md',
  value,
  options,
  placeholder = 'Choose value',
  disabled,
  touched,
  error,
  note,
  onSelect,
  onBlur = () => {},
}: AppSelectProps<T>): React.ReactElement {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const inputValue: string = options.find(item => item.id === value)?.title ?? '';
  const isInputTouched: boolean = touched === undefined || touched;
  const errorMessage: string = isInputTouched && error ? error : '';
  const helperText: string = errorMessage || note || '';
  const AppSelectDropdownRef = useRef(null);

  const className = cn(
    styles.AppSelect__wrapper,
    errorMessage && styles['AppSelect--error'],
    disabled && styles['AppSelect--disabled'],
  );

  const handleClick = (): void => {
    if (disabled) return;
    setIsOpened(prevState => !prevState);
  };

  const handleFocus = (): void => {
    if (disabled || isOpened) return;
    setIsOpened(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (disabled || !isOpened) return;
    setIsOpened(false);
    onBlur(e);
  };

  return (
    <div className={className}>
      <div className={styles.AppSelect__container}>
        <input
          name={name}
          value={inputValue}
          disabled={disabled}
          readOnly
          placeholder={placeholder}
          className={cn(styles.AppSelect, styles[`AppSelect--${size}`])}
          onPointerDown={handleClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <ChevronDownIcon
          width={20}
          height={20}
          className={cn(styles.AppSelect__icon, { [styles['AppSelect__icon--active']]: isOpened })}
        />

        <CSSTransition
          in={isOpened}
          timeout={300}
          classNames="AppSelectDropdown"
          unmountOnExit
          nodeRef={AppSelectDropdownRef}
        >
          <AppSelectDropdown //
            ref={AppSelectDropdownRef}
            value={value}
            options={options}
            onSelect={onSelect}
            onClose={handleClick}
          />
        </CSSTransition>
      </div>

      <p className={styles.AppSelect__note}>{helperText}</p>
    </div>
  );
}

export default AppSelect;

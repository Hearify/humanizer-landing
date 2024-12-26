import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import cn from 'classnames';

import AppSelectDropdown from './AppSelectDropdown/AppSelectDropdown';
import styles from './AppSelect.module.scss';

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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const inputValue: string = options.find(item => item.id === value)?.title ?? '';
  const isInputTouched: boolean = touched === undefined || touched;
  const errorMessage: string = isInputTouched && error ? error : '';
  const helperText: string = errorMessage || note || '';

  const className = cn(
    styles.AppSelect__wrapper, //
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'ArrowDown') {
      handleFocus();
    }
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
          onKeyDown={handleKeyDown}
        />

        <CSSTransition
          in={isOpened}
          timeout={300}
          classNames={styles.AppSelectDropdown}
          unmountOnExit
          nodeRef={dropdownRef}
        >
          <div ref={dropdownRef}>
            <AppSelectDropdown value={value} options={options} onSelect={onSelect} onClose={handleClick} />
          </div>
        </CSSTransition>
      </div>

      <p className={styles.AppSelect__note}>{helperText}</p>
    </div>
  );
}

export default AppSelect;

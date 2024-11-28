import React from 'react';
import cn from 'classnames';

import styles from './AppButton.module.scss';

type AppButtonProps = {
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  disabled?: boolean;
};

const AppButton: React.FC<AppButtonProps> = ({ text, Icon, onClick, disabled }) => {
  const className = cn(styles.AppButton, { [styles['AppButton--disabled']]: disabled });

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={className}>
      <Icon width={24} height={24} />
      <p>{text}</p>
    </button>
  );
};

export default AppButton;

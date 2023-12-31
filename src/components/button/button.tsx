import { ReactNode } from "react";
import clsx from "clsx";

import styles from "./button.module.scss";

interface IButton {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ children, disabled, onClick }: IButton) {
  return (
    <button
      type="button"
      className={clsx(styles.button, {
        [styles["button--enabled"]]: !disabled,
        [styles["button--disabled"]]: disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

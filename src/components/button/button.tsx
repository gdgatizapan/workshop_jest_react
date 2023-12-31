import { ReactNode } from "react";

import styles from "./button.module.scss";

interface IButton {
  children: ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: IButton) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

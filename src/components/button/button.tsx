import { ReactNode } from "react";

import styles from "./button.module.scss";

interface IButton {
  children: ReactNode;
}

export function Button({ children }: IButton) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
}

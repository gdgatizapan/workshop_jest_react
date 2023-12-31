import { ReactNode } from "react";

import styles from "./label.module.scss";

interface ILabel {
  htmlFor: string;
  children: ReactNode;
}

export function Label({ htmlFor, children }: ILabel) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

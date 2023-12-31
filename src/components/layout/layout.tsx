import { ReactElement } from "react";

import styles from "./layout.module.scss";

interface ILayout {
  children: ReactElement;
}

export function Layout({ children }: ILayout) {
  return <div className={styles.layout}>{children}</div>;
}

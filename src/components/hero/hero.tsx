import { IMAGES } from "@src/assets";

import styles from "./hero.module.scss";

export function Hero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Workshop Jest + React</h1>
      <img src={IMAGES.gdgLogo} className={styles.image} />
    </div>
  );
}

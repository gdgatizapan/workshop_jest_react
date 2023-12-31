import { IMAGES } from "@src/assets";

import { Image } from "../image";

import styles from "./hero.module.scss";

export function Hero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Workshop Jest + React</h1>
      <Image image={IMAGES.gdgLogo} className={styles.image} />
    </div>
  );
}

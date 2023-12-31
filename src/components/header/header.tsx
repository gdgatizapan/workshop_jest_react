import { Link } from "react-router-dom";

import { IMAGES } from "@src/assets";
import { PATH } from "@src/types";

import { Image } from "../image";

import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Image image={IMAGES.gdgLogo} className={styles.image} />
      <Link to={PATH.main}>Home</Link>
    </header>
  );
}

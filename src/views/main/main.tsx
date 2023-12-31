import { Link } from "react-router-dom";

import { Hero, Button, Header } from "@src/components";
import { PATH } from "@src/types";

import styles from "./main.module.scss";

export function Main() {
  return (
    <>
      <Header />
      <Hero />
      <div className={styles.buttons}>
        <Link to={PATH.counter}>
          <Button>Counter</Button>
        </Link>
        <Link to={PATH.form}>
          <Button>Form</Button>
        </Link>
      </div>
    </>
  );
}

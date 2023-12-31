import { Hero, Button } from "@src/components";

import styles from "./main.module.scss";

export function Main() {
  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.buttons}>
        <Button>Counter</Button>
        <Button>Form</Button>
      </div>
    </div>
  );
}

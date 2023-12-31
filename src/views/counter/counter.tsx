import { useState } from "react";

import { Header, Button } from "@src/components";

import styles from "./counter.module.scss";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    setCount((prevState) => prevState - 1);
  };

  const handleIncrease = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <>
      <Header />
      <div className={styles.counter}>
        <Button onClick={handleDecrease}>-1</Button>
        <p className={styles.count}>{count}</p>
        <Button onClick={handleIncrease}>+1</Button>
      </div>
    </>
  );
}

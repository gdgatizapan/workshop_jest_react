import { useEffect, useState } from "react";

import { Header, Input, Label, Button } from "@src/components";

import styles from "./form.module.scss";

export function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (name === "" || lastName === "") {
      setShowMessage(false);
    }
  }, [name, lastName]);

  const handleSend = () => {
    setShowMessage(true);
  };

  return (
    <>
      <Header />
      <div className={styles.form}>
        <div className={styles.input}>
          <Label htmlFor="name">Nombre</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.input}>
          <Label htmlFor="lastName">Apellido</Label>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles.send}>
          <Button
            disabled={name === "" || lastName === ""}
            onClick={handleSend}
          >
            Enviar
          </Button>
        </div>
        {showMessage && (
          <p>
            Hola {name} {lastName}
          </p>
        )}
      </div>
    </>
  );
}

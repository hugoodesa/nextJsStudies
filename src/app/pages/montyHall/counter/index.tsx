"use client";
import styles from "./counter.module.css";
import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
  comunication: Dispatch<SetStateAction<number>>;
};

export default function Counter({ comunication }: Props) {
  const [counter, setCounter] = useState<number>(0);

  const handlerIncrement = () => {
    let newState = counter + 1;
    setCounter(newState);
    comunication(newState);
  };

  const handlerDecrement = () => {
    let newState = counter - 1;
    setCounter(newState);
    comunication(newState);
  };

  return (
    <>
      <h3 style={{ margin: "20px" }}>{counter}</h3>
      <div className={styles.buttons}>
        <button onClick={handlerDecrement} className={styles.button}>
          -
        </button>
        <button onClick={handlerIncrement} className={styles.button}>
          +
        </button>
      </div>
    </>
  );
}

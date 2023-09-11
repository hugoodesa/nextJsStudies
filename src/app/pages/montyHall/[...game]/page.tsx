"use client";

import { useState } from "react";
import Door from "./door";
import styles from "./game.module.css";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const CardBoard = ({ children }: Props) => {
  return (
    <div className={styles.board}>
      <h1> Select the correct Door</h1>
      <div className={styles.doors}>{children}</div>
    </div>
  );
};

const Game = ({ params }: { params: { game: string } }) => {
  const [mainRoute, quantity, selected]: string = params?.game;

  const [choice, setChoice] = useState<number>(0);

  const renderDoors = () => {
    return Array(Number(quantity))
      .fill(0)
      .map((door, index) => {
        const number = index + 1;
        return (
          <div style={{ margin: "10px" }}>
            <Door
              gift={Number(selected) === number}
              number={index + 1}
              key={index}
              setChoice={setChoice}
              selected={choice === number}
            />
          </div>
        );
      });
  };

  return (
    <>
      <CardBoard>{renderDoors()}</CardBoard>
    </>
  );
};

export default Game;

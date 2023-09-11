"use client";

import styles from "./montyHall.module.css";
import Counter from "./counter";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

type TitleProps = {
  title?: string;
  color?: "#2ecc71" | "#e74c3c" | "#95a5a6";
  children?: string | JSX.Element | JSX.Element[];
};

const Square = ({ title, color, children }: TitleProps) => {
  return (
    <div className={styles.square} style={{ backgroundColor: color }}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

const Menu = ({ children }: Props) => {
  return <div className={styles.menu}>{children}</div>;
};

const Game = ({ children }: Props) => {
  return <div className={styles.game}>{children}</div>;
};

const MontyHall = () => {
  const [doors, setDoors] = useState<number>(0);
  const [selected, setSelected] = useState<number>(0);
  const router = useRouter();

  const isGameValid = (): boolean => {
    if (selected <= doors) {
      return true;
    } else if (doors < 0 || selected < 0) {
      throw Error("Doors and selected must to be positive");
    }
    throw Error("selected must lower or equals doors");
  };

  const startGame = () => {
    console.log(`selected : ${selected}`);
    console.log(`doors : ${doors}`);

    //redirect("/pages/montyHall/game");
    router.push("/pages/montyHall/game/1/2");
    /* try {
      isGameValid();
    } catch (exception) {
      alert(exception);
    } */
  };

  return (
    <Game>
      <Menu>
        <Square color="#e74c3c">
          <h1>Monty Hall</h1>
        </Square>
        <Square color="#95a5a6">
          <h3>Quantas Portas</h3>
          <Counter comunication={setDoors} />
        </Square>
        <Square color="#95a5a6">
          <h3>Porta Selecionada</h3>
          <Counter comunication={setSelected} />
        </Square>
        <Square>
          <button
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#2ecc71",
              border: "none",
            }}
            onClick={startGame}
          >
            <h1>Iniciar</h1>
          </button>
        </Square>
      </Menu>
    </Game>
  );
};

export default MontyHall;

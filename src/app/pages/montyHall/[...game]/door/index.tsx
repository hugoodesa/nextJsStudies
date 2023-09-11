"use client";

import { Dispatch, SetStateAction, useState } from "react";
import styles from "./door.module.css";

type Props = {
  number: number;
  gift: boolean;
  setChoice: Dispatch<SetStateAction<number>>;
  selected: boolean;
};

type Door = {
  selected: boolean;
  number: number;
  open: boolean;
  gift: boolean;
};

const Door = ({ selected, setChoice, number, gift }: Props) => {
  const [door, setDoor] = useState<Door>({
    gift,
    open: false,
    selected: false,
    number,
  });

  const handleOpen = () => {
    setDoor({ ...door, open: !door.open });
  };

  const handleSelect = () => {
    setDoor({ ...door, selected: !door.selected });
    setChoice(number);
  };

  const OpenDoor = () => {
    return (
      <div className={styles.frame}>
        <div className={styles.doorOpen}>
          <span onClick={handleSelect} className={styles.number}></span>
        </div>
        <div className={styles.doorEnd} />
      </div>
    );
  };

  const Door = () => {
    return (
      <div className={styles.frame}>
        <div className={styles.door}>
          <span onClick={handleSelect} className={styles.number}>
            {door.number}
          </span>
          <div onClick={handleOpen} className={styles.handle}></div>
        </div>
        <div className={styles.doorEnd} />
      </div>
    );
  };

  const Selected = () => {
    return (
      <div className={styles.frame}>
        <div className={styles.doorSelected}>
          <span onClick={handleSelect} className={styles.number}>
            {door.number}
          </span>
          <div onClick={handleOpen} className={styles.handle}></div>
        </div>
        <div className={styles.doorEnd} />
      </div>
    );
  };

  const Gift = () => {
    return (
      <div className={styles.frame}>
        <div className={styles.doorOpen}>
          <div className={styles.gift}>Gift</div>
        </div>
        <div className={styles.doorEnd} />
      </div>
    );
  };

  const renderDoor = () => {
    if (door.gift && door.open) {
      return <Gift />;
    } else if (selected) {
      return <Selected />;
    } else if (door.open) {
      return <OpenDoor />;
    }
    return <Door />;
  };

  return renderDoor();
};

export default Door;

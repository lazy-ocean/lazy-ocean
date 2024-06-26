"use client";
import Link from "next/link";
import styles from "./TimeMachine.module.css";
import { useCallback, useEffect, useState } from "react";
import { Year } from "@/2023/interfaces";

const checkIfVisible = (): boolean => {
  const currentOffset = window.scrollY;
  const offsetHeight = document.body.scrollHeight - window.innerHeight;
  const totalScrolledInPercentage = Math.round(
    (currentOffset / offsetHeight) * 100
  );
  return totalScrolledInPercentage < 10;
};

export const TimeMachineBtn = ({ current }: { current: Year }) => {
  const [isVisible, setIsVisible] = useState(true);

  const listenScrollEvent = useCallback((): void => {
    setIsVisible(checkIfVisible());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [listenScrollEvent]);

  return (
    <div
      className={`${styles.wrapper} ${isVisible ? styles.active : ""} ${
        styles[current]
      }`}
    >
      <div className={`${styles.expandingButtons} flexColumn`}>
        {current !== Year.twentyOne && (
          <Link href="/2021" className={styles.first}>
            2021
          </Link>
        )}
        {current !== Year.twentyTwo && (
          <Link href="/2022" className={styles.second}>
            2022
          </Link>
        )}
        {current !== Year.twentyThree && (
          <Link href="/" className={styles.third}>
            {new Date().getFullYear()}
          </Link>
        )}
      </div>
      <button className={styles.timeMachineBtn}>
        <img src="./sand-clock.png" alt="" />
      </button>
    </div>
  );
};

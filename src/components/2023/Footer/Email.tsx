"use client";
import React, { useState } from "react";
import styles from "./Footer.module.css";

const Email = () => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    setCopied(true);
    if (typeof window !== "undefined") {
      await window.navigator.clipboard.writeText(
        "panchenko.vladlena@gmail.com"
      );
    }
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleClick} className={styles.email}>
      {copied ? "Copied to clipboard" : "panchenko.vladlena@gmail.com"}
    </button>
  );
};

export default Email;

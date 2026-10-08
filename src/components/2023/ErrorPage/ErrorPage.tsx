import { useState } from "react";
import Footer from "@/2023/Footer/Footer";
import { Header } from "@/2023/Header/Header";
import styles from "./ErrorPage.module.css";

export const ErrorPage = () => {
  const [isFlipped, setIsFlipped] = useState<false | 1 | 2>(false);

  const style = (ind: 1 | 2) => ({
    position: isFlipped && isFlipped !== ind && "absolute",
    opacity: isFlipped && isFlipped !== ind && "0",
    right: isFlipped && isFlipped !== ind && "35%",
    zIndex: isFlipped && isFlipped !== ind && "-1",
    transition: "right .3s linear",
  });

  return (
    <div className={`${styles.page} flexColumn`}>
      <Header />
      <main className={`${styles.fortuneBlock} flexColumn`}>
        <h2>Whoops, looks like there&apos;s no such page</h2>
        <h3>Choose your fortune instead:</h3>
        <div className={styles.cards}>
          <div
            className={`${styles.card} ${styles.hiddenCard} flexColumn`}
            key="back"
            onClick={() => setIsFlipped(false)}
          >
            <p>
              Go watch my favourite YT video
              <br />
              (not rickroll I promise)
            </p>
            <div>
              <a href="https://www.youtube.com/watch?v=gieQh1E0b4o">
                Let&apos;s go
              </a>
              <span>🐱</span>
            </div>
          </div>
          <div
            className={styles.card}
            key="front"
            onClick={() => setIsFlipped(2)}
          >
            <p>2.</p>
            <img src="/crystal-ball-2.png" alt="Magical crystal ball" />
          </div>
          <div
            className={`${styles.card} ${styles.hiddenCard}`}
            key="back"
            onClick={() => setIsFlipped(false)}
          >
            <p>Here&apos;s some random blog post</p>
            <div>
              <a href="/posts/love-hate-tailwind">Check out</a>
              <span>🤓</span>
            </div>
          </div>
        </div>
      </main>
      <Footer cv="/Vladlena_Panchenko_CV.pdf" />
    </div>
  );
};

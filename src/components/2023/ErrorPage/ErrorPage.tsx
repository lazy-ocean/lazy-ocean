import { useState } from "react";
import Footer from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./ErrorPage.module.css";
import ReactCardFlip from "react-card-flip";

/* const FlipCard = ({ children }) => {
  return (
    <ReactCardFlip isFlipped={isFlipped}>
      {children}
    </ReactCardFlip>
  );
}; */

export const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const [isFlipped, setIsFlipped] = useState<false | 1 | 2>(false);

  const style = (ind: 1 | 2) => ({
    position: isFlipped && isFlipped !== ind && "absolute",
    opacity: isFlipped && isFlipped !== ind && "0",
    right: isFlipped && isFlipped !== ind && "35%",
    zIndex: isFlipped && isFlipped !== ind && "-1",
    transition: "right .3s linear",
  });

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.fortuneBlock}>
        <h2>Whoops, looks like there's no such page</h2>
        <h3>Choose your fortune instead:</h3>
        <div className={styles.cards}>
          <ReactCardFlip
            isFlipped={isFlipped && isFlipped === 1}
            containerStyle={{ ...style(1) }}
            flipSpeedBackToFront={0.9}
          >
            <div
              className={styles.card}
              key="front"
              onClick={() => setIsFlipped(1)}
            >
              <p>1.</p>
              <img src="/crystal-ball.png" />
            </div>
            <div
              className={`${styles.card} ${styles.hiddenCard}`}
              key="back"
              onClick={() => setIsFlipped(false)}
            >
              <p>
                Go watch my favourite YT video
                <br />
                (not rickroll I promise)
              </p>
              <div>
                <a href="/posts/meow">Let's go </a>
                <span>🐱</span>
              </div>

              {/*   <img src="/kitty.png" alt="cute cat" /> */}
            </div>
          </ReactCardFlip>
          <ReactCardFlip
            isFlipped={isFlipped && isFlipped === 2}
            containerStyle={{ ...style(2) }}
            flipSpeedBackToFront={0.9}
          >
            <div
              className={styles.card}
              key="front"
              onClick={() => setIsFlipped(2)}
            >
              <p>2.</p>
              <img src="/crystal-ball-2.png" />
            </div>
            <div
              className={`${styles.card} ${styles.hiddenCard}`}
              key="back"
              onClick={() => setIsFlipped(false)}
            >
              <p>Here's some random blog post</p>
              <div>
                <a href="/posts/meow">Check out</a>
                <span>🤓</span>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </div>

      <Footer cv="" />
    </div>
  );
};
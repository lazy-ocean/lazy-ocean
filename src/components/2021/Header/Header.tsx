import styles from "./Header.module.css";
import typographyStyles from "../Typography.module.css";

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__container}>
      <img
        src="/2021/avatar.jpg"
        alt="avatar"
        className={styles.header__photo}
      />
      <div className={typographyStyles.header__text}>
        <h1 className={typographyStyles.header__text__main}>
          Hello! 👋
          <br />I am Vladlena Panchenko
        </h1>
        <p className={typographyStyles.header__text__small}>
          Junior frontend developer, Siberian-born living in Gdansk, Poland.
          <br />
          Available for new working opportunities.
        </p>
      </div>
      <div className={styles.header__links}>
        <ul>
          <li>
            <a href="https://github.com/lazy-ocean" target="_blank">
              <img
                src="/2021/github_logo.png"
                alt=""
                className={styles.header__link}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vladlena-panchenko/"
              target="_blank"
            >
              <img
                src="/2021/linkedin_logo.png"
                alt=""
                className={styles.header__link}
              />
            </a>
          </li>
          <li>
            <a href="/Vladlena_Panchenko_CV.pdf">
              <img
                src="/2021/cv_logo.png"
                alt=""
                className={styles.header__link}
              />
            </a>
          </li>
          <li>
            <a href="https://codepen.io/lazy_ocean/pens/public" target="_blank">
              <img
                src="/2021/codepen_logo.png"
                alt=""
                className={styles.header__link}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

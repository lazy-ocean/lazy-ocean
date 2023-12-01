import styles from "./Skills.module.css";
import typographyStyles from "../Typography.module.css";

export const Skills = () => (
  <section className={styles.skills}>
    <h2 className={typographyStyles.h2}>My skills</h2>
    <div className={styles.skills__section}>
      <div className={styles.skill}>
        <div className={styles.skill__wrapper}>
          <img
            className={styles.skill__img}
            src="/2021/HTML-CSS.png"
            alt="HTML-CSS"
          />
          <h3>HTML5 & CSS3</h3>
        </div>
        <p className={styles.skill__content}>
          Develop cross-browser and for mobile, know a thing or two on
          responsive web-design, use&nbsp;Sass, BEM.
        </p>
      </div>
      <div className={styles.skill}>
        <div className={styles.skill__wrapper}>
          <img
            className={styles.skill__img}
            src="/2021/JS-logo.png"
            alt="JavaScript logo"
          />
          <h3>JavaScript (ES6)</h3>
        </div>

        <p className={styles.skill__content}>
          Enjoy cracking JS coding challenges, kinda like OOP, understand basics
          of asynchronous programming.
        </p>
      </div>
      <div className={styles.skill}>
        <div className={styles.skill__wrapper}>
          <img
            className={styles.skill__img}
            src="/2021/React-logo.png"
            alt="react"
          />
          <h3>React JS</h3>
        </div>

        <p className={styles.skill__content}>
          Love developing apps with React: can write both className and
          functional components with hooks, manage state and build complex UIs.
        </p>
      </div>
      <div className={styles.skill}>
        <div className={styles.skill__wrapper}>
          <img
            className={styles.skill__img}
            src="/2021/redux-logo.png"
            alt="redux"
          />
          <h3>Redux</h3>
        </div>

        <p className={styles.skill__content}>
          Add basic Redux to my React apps to maintain immutable state and keep
          my components out of side effects.
        </p>
      </div>
      <div className={styles.skill}>
        <div className={styles.skill__wrapper}>
          <img
            className={styles.skill__img}
            src="/2021/nodejs-npm-exp.png"
            alt="node-npm"
          />
          <h3>npm, Node.js and Express</h3>
        </div>

        <p className={styles.skill__content}>
          Use npm to install and run scripts for my projects. Can set up a
          Node/Express server with routing for CRUD apps.
        </p>
      </div>

      <div className={styles.skill}>
        <div className={styles.skill__wrapper}>
          <img
            className={styles.skill__img}
            src="/2021/jest-logo.png"
            alt="Jest"
          />
          <img
            className={styles.skill__img}
            src="/2021/cypress-logo.png"
            alt="cypress"
          />
          <h3>Testing</h3>
        </div>

        <p className={styles.skill__content}>
          Can test with Jest and Cypress: unit- and e2e-tests, work with
          fixtures and even do some
          <span className="crossed">woodoo</span> monkey&nbsp;patching.
        </p>
      </div>
      <div className={styles.skill}>
        <div className={styles.skill__wrapper}>
          <img
            className={styles.skill__img}
            src="/2021/github_logo.png"
            alt="github"
          />
          <img
            className={styles.skill__img}
            src="/2021/gitlab_logo.png"
            alt="gitlab"
          />
          <h3>GitHub/GitLab</h3>
        </div>
        <p className={styles.skill__content}>
          Love git and never forget to&nbsp;
          <code>git&nbsp;pull</code>. Use&nbsp;conventional commits and
          branching even in my solo projects.
        </p>
      </div>
      <div className={styles.skill}>
        <div className={styles.skill__wrapper}>
          <img className={styles.skill__img} src="/2021/gulp.png" alt="gulp" />
          <img
            className={styles.skill__img}
            src="/2021/parcel_logo.png"
            alt="parcel"
          />
          <h3>Gulp and Parcel</h3>
        </div>

        <p className={styles.skill__content}>
          Operate Gulp and Parcel to optimize my workflow and bundle projects,
          including this&nbsp;website.
        </p>
      </div>
      <div className={styles.skill}>
        <div className={styles.skill__wrapper}>
          <img
            className={styles.skill__img}
            src="/2021/bootstrap-logo.png"
            alt="gulp"
          />
          <img
            className={styles.skill__img}
            src="/2021/material-ui-logo.png"
            alt="parcel"
          />
          <img
            className={styles.skill__img}
            src="/2021/chakra-logo.png"
            alt="chakra ui"
          />
          <h3>Design systems</h3>
        </div>

        <p className={styles.skill__content}>
          Use design systems in my projects for building better and cleaner
          interfaces.
        </p>
      </div>
    </div>
  </section>
);

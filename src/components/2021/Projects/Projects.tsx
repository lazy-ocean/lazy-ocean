import styles from "./Projects.module.css";
import typographyStyles from "../Typography.module.css";

export const Projects = () => (
  <section className={styles.projects}>
    <h2 className={typographyStyles.h2}>My projects</h2>
    <div
      className={`${styles.card} ${styles.childPosition}`}
      style={{ "--index": 1 } as any}
    >
      <div className={styles.card__text}>
        <div className={styles.card__text__h}>
          <h3 className={typographyStyles.h3}>
            <a
              href="https://justdoltapp.herokuapp.com/"
              className={styles.a__animated}
              target="_blank"
            >
              Just Do It App
            </a>
          </h3>
          <p>March - May 2021</p>
        </div>
        <p>
          A&nbsp;basic <i>fullstack</i> todo app with user authentication.
          <br />
          Features include creating an&nbsp;account or&nbsp;logging
          in&nbsp;as&nbsp;a guest; adding, editing and deleting new&nbsp;tasks.
          <br />
          Build&nbsp;with&nbsp;React for interfaces and Express
          for&nbsp;backend.
        </p>
        <a
          href="https://github.com/lazy-ocean/just-do-it-app"
          className={typographyStyles.githubLink}
          target="_blank"
        >
          <img src="/2021/github_logo.png" alt="git" />
          View on Github
        </a>
        <div className={styles.card__text__techs}>
          <ul>
            <li className={styles.express_grey}>Express</li>
            <li className={styles.react_blue}>React</li>
            <li className={styles.js_yellow}>JavaScript</li>
            <li className={styles.html_green}>HTML5</li>
          </ul>
        </div>
      </div>
      <div className={styles.card__pics}>
        <img
          src="/2021/todo_app1-min.png"
          alt="just do it app"
          className={`${styles.card__pic} ${styles.pic1}`}
        />
        <img
          src="/2021/todo_app2-min.png"
          alt="just do it app"
          className={`${styles.card__pic} ${styles.pic2}`}
        />
      </div>
    </div>

    <div
      className={`${styles.card} ${styles.childPosition}`}
      style={{ "--index": 2 } as any}
    >
      <div className={styles.card__text}>
        <div className={styles.card__text__h}>
          <h3 className={typographyStyles.h3}>
            <a
              href="https://github.com/lazy-ocean/data-table"
              className={styles.a__animated}
              target="_blank"
            >
              Data grid
            </a>
          </h3>
          <p>February 2021</p>
        </div>
        <p>
          Comprehensive data-table for unlimited set of data made with{" "}
          <a
            href="https://material-ui.com/"
            className={styles.a__animated}
            target="_blank"
          >
            Material UI
          </a>{" "}
          components library. Features include filtering and multi-filtering,
          sorting, selection, pagination and data editing.
          <br />
          First TypeScript project.
        </p>
        <a
          href="https://github.com/lazy-ocean/data-table"
          className={typographyStyles.githubLink}
          target="_blank"
        >
          <img
            src="/2021/github_logo.png"
            alt="git"
            className={typographyStyles.git}
          />{" "}
          View on Github
        </a>
        <div className={styles.card__text__techs}>
          <ul>
            <li className={styles.react_blue}>React</li>
            <li className={styles.ts_blue}>TypeScript</li>
            <li className={styles.sass_pink}>Sass</li>
            <li className={styles.html_green}>HTML5</li>
          </ul>
        </div>
      </div>
      <div className={styles.card__pics}>
        <img
          src="/2021/datagrid.png"
          alt="data grid"
          className={`${styles.card__pic} ${styles.pic1}`}
        />
        <img
          src="/2021/datagrid2.png"
          alt="data grid"
          className={`${styles.card__pic} ${styles.pic2}`}
        />
      </div>
    </div>

    <div
      className={`${styles.card} ${styles.childPosition}`}
      style={{ "--index": 3 } as any}
    >
      <div className={styles.card__text}>
        <div className={styles.card__text__h}>
          <h3 className={typographyStyles.h3}>
            <a
              href="https://lazy-ocean.github.io/calculator/"
              className={styles.a__animated}
              target="_blank"
            >
              React calculator
            </a>
          </h3>
          <p>January 2021</p>
        </div>
        <p>
          First self-made React based app.
          <br />A simple calculator that supports basic arithmetic calculations
          on integers. All calculations made using{" "}
          <a
            href="https://mathjs.org/"
            className={styles.a__animated}
            target="_blank"
          >
            mathjs
          </a>{" "}
          library. Keyboard friendly! Made with CSS Grid, responsive
          desktop-first and cross-browser support.
        </p>
        <a
          href="https://github.com/lazy-ocean/calculator"
          className={typographyStyles.githubLink}
          target="_blank"
        >
          <img
            src="/2021/github_logo.png"
            alt="git"
            className={typographyStyles.git}
          />{" "}
          View on Github
        </a>
        <div className={styles.card__text__techs}>
          <ul>
            <li className={styles.react_blue}>React</li>
            <li className={styles.js_yellow}>JavaScript</li>
            <li className={styles.sass_pink}>Sass</li>
            <li className={styles.html_green}>HTML5</li>
          </ul>
        </div>
      </div>
      <div className={styles.card__pics}>
        <img
          src="/2021/calculator.png"
          alt="calculator"
          className={styles.card__pic}
        />
      </div>
    </div>

    <div
      className={`${styles.card} ${styles.childPosition}`}
      style={{ "--index": 4 } as any}
    >
      <div className={styles.card__text}>
        <div className={styles.card__text__h}>
          <h3 className={typographyStyles.h3}>
            <a style={{ cursor: "default" }} target="_blank">
              Gdziedzik.pl — wild boars' tracking map
            </a>
          </h3>
          <p>November 2020</p>
        </div>
        <p>
          Web application made with OpenLayers API.
          <br />
          Main features include: boars pins appearing on the map based on
          backend data (with main information and photo if available) and
          interactive form to report a sighting using Geolocation API. Made with
          BEM, CSS Flexbox, responsive desktop-first and cross-browser support.
          <br />
          <br />
          Built during{" "}
          <a
            href="https://hackyeah.pl/"
            className={styles.a__animated}
            target="_blank"
          >
            HackYeah 2020
          </a>{" "}
          hackathon.
          <br />
          <a
            href="/2021/gdzidzik-presentation.pdf"
            className={styles.a__animated}
          >
            Full project presentation (PDF)
          </a>
          <a
            href="https://github.com/gdziedzik/website"
            className={typographyStyles.githubLink}
            target="_blank"
          >
            <img
              src="/2021/github_logo.png"
              alt="git"
              className={typographyStyles.git}
            />{" "}
            View on Github
          </a>
        </p>
        <div className={styles.card__text__techs}>
          <ul>
            <li className={styles.js_yellow}>JavaScript</li>
            <li className={styles.parcel_blue}>Parcel</li>
            <li className={styles.sass_pink}>Sass</li>
            <li className={styles.html_green}>HTML5</li>
          </ul>
        </div>
      </div>
      <div className={styles.card__pics}>
        <img
          src="/2021/dziki1.png"
          alt="dziki-1"
          className={`${styles.card__pic} ${styles.pic1}`}
        />
        <img
          src="/2021/dziki2.png"
          alt="dziki-2"
          className={`${styles.card__pic} ${styles.pic2}`}
        />
      </div>
    </div>

    <div
      className={`${styles.card} ${styles.childPosition}`}
      style={{ "--index": 5 } as any}
    >
      <div className={styles.card__text}>
        <div className={styles.card__text__h}>
          <h3 className={typographyStyles.h3}>
            <a
              href="https://github.com/lazy-ocean/coding_challenges"
              className={styles.a__animated}
              target="_blank"
            >
              Coding challenges
            </a>
          </h3>
          <p>October 2020 - current</p>
        </div>

        <p>My coding challenges from different platforms.</p>
        <ul className={styles.card__text__list}>
          <li>
            <a
              href="https://github.com/lazy-ocean/coding_challenges/tree/main/advent-of-code/2020"
              className={styles.a__animated}
              target="_blank"
            >
              Advent of Code 2020
            </a>
            <span className="tree">🎄</span>
          </li>
          <li>
            <a
              href="https://github.com/lazy-ocean/coding_challenges/tree/main/codewars"
              className={styles.a__animated}
              target="_blank"
            >
              Codewars
            </a>
          </li>
        </ul>
        <a
          href="https://github.com/lazy-ocean/coding_challenges"
          className={typographyStyles.githubLink}
          target="_blank"
        >
          <img
            src="/2021/github_logo.png"
            alt="git"
            className={typographyStyles.git}
          />{" "}
          View on Github
        </a>
        <div className={styles.card__text__techs}>
          <ul>
            <li className={styles.js_yellow}>JavaScript</li>
            <li className={styles.jest_green}>Jest</li>
            <li className={styles.npm_blue}>npm</li>
          </ul>
        </div>
      </div>
    </div>
    <div
      className={`${styles.card} ${styles.childPosition}`}
      style={{ "--index": 6 } as any}
    >
      <div className={styles.card__text}>
        <div className={styles.card__text__h}>
          <h3 className={typographyStyles.h3}>
            <a
              href="https://inspair.ru/calc"
              className={styles.a__animated}
              target="_blank"
            >
              ROI calculation form (RU)
            </a>
          </h3>
          <p>July 2020</p>
        </div>

        <p>
          Interactive form to calculate project ROI and generate annual cash
          flow table, designed and developed for robotics system integrator
          Inspair. May be used as a framework-like base to build similar forms.
          First experience of DOM-manipulation and first commercial project.
        </p>
        <a
          href="https://github.com/lazy-ocean/inspair-calculations-table"
          className={typographyStyles.githubLink}
          target="_blank"
        >
          <img
            src="/2021/github_logo.png"
            alt="git"
            className={typographyStyles.git}
          />{" "}
          View on Github
        </a>
        <div className={styles.card__text__techs}>
          <ul>
            <li className={styles.js_yellow}>JavaScript</li>
            <li className={styles.gulp_peach}>Gulp</li>
            <li className={styles.sass_pink}>Sass</li>
            <li className={styles.html_green}>HTML5</li>
            <li className={styles.npm_blue}>npm</li>
          </ul>
        </div>
      </div>
      <div className={styles.card__pics}>
        <img
          src="/2021/Inspair1.png"
          alt="inspair-1"
          className={`${styles.card__pic} ${styles.pic1}`}
        />
        <img
          src="/2021/Inspair2.png"
          alt="inspair-2"
          className={`${styles.card__pic} ${styles.pic2}`}
        />
      </div>
    </div>
    <div
      className={`${styles.card} ${styles.childPosition}`}
      style={{ "--index": 7 } as any}
    >
      <div className={styles.card__text}>
        <div className={styles.card__text__h}>
          <h3 className={typographyStyles.h3}>
            <a
              href="https://nyam-nyam.me/"
              className={styles.a__animated}
              target="_blank"
            >
              Nyam-Nyam
            </a>{" "}
            and{" "}
            <a
              href="https://alanamama.ru/"
              className={styles.a__animated}
              target="_blank"
            >
              AlanaMama
            </a>{" "}
            modifications
          </h3>
          <p>June - July 2020</p>
        </div>
        <p>
          Maintenance work on already existing Russian food-delivery websites.
          Minor restyling works, mostly CSS (Sass) editing.
        </p>
        <div className={styles.card__text__techs}>
          <ul>
            <li className={styles.sass_pink}>Sass</li>
            <li className={styles.html_green}>HTML5</li>
          </ul>
        </div>
      </div>
      <div className={styles.card__pics}>
        <img
          src="/2021/alana.png"
          alt="alana mama"
          className={`${styles.card__pic} ${styles.pic1}`}
        />
        <img
          src="/2021/nyam.png"
          alt="nyam-nyam"
          className={`${styles.card__pic} ${styles.pic2}`}
        />
      </div>
    </div>
    <div
      className={`${styles.card} ${styles.childPosition}`}
      style={{ "--index": 8 } as any}
    >
      <div className={styles.card__text}>
        <div className={styles.card__text__h}>
          <h3 className={typographyStyles.h3}>
            <a
              href="https://lazy-ocean.github.io/Interior/"
              className={styles.a__animated}
              target="_blank"
            >
              Interior website
            </a>
          </h3>
          <p>June - July 2020</p>
        </div>
        <p>
          Multi-page website for the non-existing furniture store. Made with BEM
          and component-based design, CSS Flexbox and Grid layouts, responsive
          desktop-first and cross-browser support. Includes CSS animations and
          vanilla-JS burger-menu. Made as a first self-developed web-page.
        </p>
        <a
          href="https://github.com/lazy-ocean/Interior"
          className={typographyStyles.githubLink}
          target="_blank"
        >
          <img
            src="/2021/github_logo.png"
            alt="git"
            className={typographyStyles.git}
          />{" "}
          View on Github
        </a>
        <div className={styles.card__text__techs}>
          <ul>
            <li className={styles.sass_pink}>Sass</li>
            <li className={styles.html_green}>HTML5</li>
            <li className={styles.npm_blue}>npm</li>
            <li className={styles.js_yellow}>JavaScript</li>
          </ul>
        </div>
      </div>
      <div className={styles.card__pics}>
        <img
          src="/2021/Interior.png"
          alt="interior landing"
          className={`${styles.card__pic} ${styles.pic1}`}
        />
        <img
          src="/2021/interior2.png"
          alt="interior landing 2"
          className={`${styles.card__pic} ${styles.pic2}`}
        />
      </div>
    </div>
    <div
      className={`${styles.card} ${styles.childPosition}`}
      style={{ "--index": 9 } as any}
    >
      <div className={styles.card__text}>
        <div className={styles.card__text__h}>
          <h3 className={typographyStyles.h3}>
            EY Career events landings (RU)
          </h3>
          <p>2019 - 2020</p>
        </div>
        <p>
          Several of many landing pages for graduate career events of EY Russia.
          Made with AEM (Adobe Experience Manager) in accordance with EY Global
          styles.
        </p>
        <ul className={styles.card__text__list}>
          <li>Online lectures</li>
          <li>EY Campus</li>
          <li>Open Talk</li>
        </ul>

        <div className={styles.card__text__techs}>
          <ul>
            <li className={styles.aem_orange}>AEM</li>
          </ul>
        </div>
      </div>
      <div className={styles.card__pics}>
        <img
          src="/2021/ey-land1.png"
          alt="ey landing"
          className={`${styles.card__pic} ${styles.pic1}`}
        />
        <img
          src="/2021/ey-land2.png"
          alt="ey landing 2"
          className={`${styles.card__pic} ${styles.pic2}`}
        />
      </div>
    </div>
  </section>
);

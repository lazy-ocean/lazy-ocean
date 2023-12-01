import React from "react";
import styles from "./Info.module.css";
import SocialLinks from "../SocialLinks/SocialLinks";

const MainInfo = ({
  header,
  description,
}: {
  header: string;
  description: string;
}) => (
  <section className={styles.copy}>
    <h1 dangerouslySetInnerHTML={{ __html: header }} />
    <p dangerouslySetInnerHTML={{ __html: description }} />
    <SocialLinks cv={"/Vladlena_Panchenko_CV.pdf"} />
  </section>
);

export default MainInfo;

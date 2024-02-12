"use client";
import React, { useEffect } from "react";
import styles from "./BlogLink.module.css";
import { annotate } from "rough-notation";

const BlogLink = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const el = document.querySelector("#blogLink");
      const annotation = annotate(el as HTMLElement, {
        type: "highlight",
        color: "#ffae00",
      });
      annotation.show();
    }
  }, []);

  return (
    <section>
      <h2>Blog</h2>
      <p>
        I run a tiny blog where I write about things I find interesting.{" "}
        <span className={styles.link} id="blogLink">
          <a href="/posts">Check it out!</a>
        </span>
      </p>
    </section>
  );
};

export default BlogLink;

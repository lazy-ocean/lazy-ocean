"use client";
import { Fragment } from "react";
import styles from "./Accordion.module.css";
import { Tags } from "@/2023/Tags/Tags";
import { BlogTags } from "@/2023/interfaces";

import { ReactElement, useMemo } from "react";

export const BlogAccordion = ({
  tags,
  bits,
}: {
  tags: BlogTags[];
  bits: ReactElement<any>;
}) => {
  const data = useMemo(
    () => [
      { uuid: "bits", h: "Bits and pieces", content: bits },
      { uuid: "tags", h: "Tags", content: <Tags tags={tags} /> },
    ],
    [tags, bits],
  );

  return (
    <div>
      {data.map(({ uuid, h, content }) => (
        <div key={uuid} className={styles.accordion}>
          <h2 className={styles.accordionTitle}>{h}</h2>
          {content}
        </div>
      ))}
    </div>
  );
};

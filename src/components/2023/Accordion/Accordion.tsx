"use client";
import styles from "./Accordion.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Tags } from "@/2023/Tags/Tags";
import { BlogTags } from "@/2023/interfaces";

import { ReactElement, useEffect, useMemo, useRef, useState } from "react";
import { AiOutlineDownSquare } from "react-icons/ai";

const AccordionContent = ({ children }: { children: ReactElement }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("");

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = `${contentRef.current.scrollHeight}px`;
      setMaxHeight(contentHeight);
    }
  }, [contentRef]);

  return (
    <AccordionItemPanel
      className={styles.accordionContent}
      style={{ "--calcH": maxHeight } as never}
    >
      <div ref={contentRef}>{children}</div>
    </AccordionItemPanel>
  );
};

export const BlogAccordion = ({
  tags,
  bits,
}: {
  tags: BlogTags[];
  bits: ReactElement;
}) => {
  const data = useMemo(
    () => [
      { uuid: "bits", h: "Bits and pieces", content: bits },
      { uuid: "tags", h: "Tags", content: <Tags tags={tags} /> },
    ],
    [tags, bits]
  );

  return (
    <Accordion
      allowZeroExpanded
      allowMultipleExpanded
      preExpanded={["bits", "tags"]}
      className={styles.accordion}
    >
      {data.map(({ uuid, h, content }) => (
        <AccordionItem uuid={uuid} key={uuid}>
          <AccordionItemHeading>
            <AccordionItemButton className={styles.accordionTitle}>
              <h2>{h}</h2>
              <AiOutlineDownSquare aria-hidden={true} />
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

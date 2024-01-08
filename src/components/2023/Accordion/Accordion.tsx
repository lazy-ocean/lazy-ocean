"use client";
import styles from "./Accordion.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Tags } from "../Tags/Tags";
import { BlogTags } from "../interfaces";
import { ReactElement } from "react";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineDownSquare } from "react-icons/ai";

export const BlogAccordion = ({
  tags,
  children,
}: {
  tags: BlogTags[];
  children: ReactElement;
}) => {
  return (
    <Accordion
      allowZeroExpanded
      allowMultipleExpanded
      preExpanded={["bits", "tags"]}
      className={styles.accordion}
    >
      <AccordionItem uuid="bits">
        <AccordionItemHeading>
          <AccordionItemButton className={styles.accordionTitle}>
            <h2>Things I loved/did lately</h2>
            <AiOutlineDownSquare aria-hidden={true} />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>{children}</AccordionItemPanel>
      </AccordionItem>
      <AccordionItem uuid="tags">
        <AccordionItemHeading>
          <AccordionItemButton className={styles.accordionTitle}>
            <h2>Tags</h2>
            <AiOutlineDownSquare aria-hidden={true} />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <Tags tags={tags} />
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

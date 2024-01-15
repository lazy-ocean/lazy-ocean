import React from "react";
import { Project } from "../interfaces";
import Card from "./Card";

const Cards = ({ items }: { items: Project[] }) => (
  <>
    <div className="flexColumn" style={{ gap: "var(--spacings-s)" }}>
      {items.map((card: Project, i) => (
        <Card card={card} i={i + 1} key={i} />
      ))}
    </div>
  </>
);

export default Cards;

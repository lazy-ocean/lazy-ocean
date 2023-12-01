import HomePage from "./home-page";
import React from "react";
import { queryDatabase, queryItemsDatabase } from "../api/queryDatabase";
import { parseItemProperties, parseMainProperties } from "../utils/parseProps";
import { MainData, Project } from "../components/2023/interfaces";
import projects from "../backups/projects";
import { mainData } from "../backups/mainData";

async function getData() {
  let items: Project[] = projects;
  let mainContent: MainData = mainData;

  try {
    const db = await queryDatabase();
    mainContent = parseMainProperties(db);
  } catch (e) {
    console.log("woopsie, db out");
  }

  try {
    const itemsDb = await queryItemsDatabase();
    items = parseItemProperties(itemsDb);
  } catch (e) {
    console.log("woopsie, db out");
  }

  return {
    mainContent,
    items,
  };
}

export default async function Page() {
  const { mainContent, items } = await getData();
  return <HomePage mainContent={mainContent} items={items} />;
}

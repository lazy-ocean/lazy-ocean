import Home from "./home-page";
import React from "react";
import { MainData, Project } from "../../components/2022/interfaces";
import projects from "../../backups/projects";
import { mainData } from "../../backups/mainData";

async function getData() {
  let items: Project[] = projects;
  let mainContent: MainData = mainData;

  return {
    mainContent,
    items,
  };
}

export default async function Page() {
  const { mainContent, items } = await getData();
  return <Home mainContent={mainContent} items={items} />;
}

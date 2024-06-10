import Home from "./home-page";
import React from "react";
import { MainData, Project } from "../../components/2022/interfaces";
import projects from "../../backups/projects";
import { mainData } from "../../backups/mainData";

function getData() {
  const items: Project[] = projects;
  const mainContent: MainData = mainData;

  return {
    mainContent,
    items,
  };
}

export default function Page() {
  const { mainContent, items } = getData();
  return <Home mainContent={mainContent} items={items} />;
}

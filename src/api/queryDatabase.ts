import { notion } from "./client";

export const queryDatabase = async () =>
  await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? "",
  });

export const queryItemsDatabase = async () =>
  await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ITEMS_ID ?? "",
  });

// @ts-nocheck
import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { MainData, Roles, Tags, TechStack } from "../components/interfaces";
import { mainData } from "../backups/mainData";
import { Project, AccentColours } from "../components/interfaces";

export const parseMainProperties = (
  database: QueryDatabaseResponse
): MainData => {
  const data = { ...mainData };

  (database.results as PageObjectResponse[]).map((row: PageObjectResponse) => {
    const role = row.properties.role.title[0].plain_text;

    switch (role) {
      case Roles.cv:
        data.cv = "/Vladlena_Panchenko_CV.pdf";
        break;
      case Roles.header:
        data.header = row.properties.content.rich_text[0].plain_text;
        break;
      case Roles.description:
        data.description = row.properties.content.rich_text[0].plain_text;
        break;
      case Roles.frontendTags:
        data.tags["Frontend"] = row.properties.tags.multi_select.map(
          (item: { name: TechStack }) => item.name
        );
        break;
      case Roles.testingTags:
        data.tags["Testing"] = row.properties.tags.multi_select.map(
          (item: { name: TechStack }) => item.name
        );
        break;
      case Roles.otherTags:
        data.tags["Everything else"] = row.properties.tags.multi_select.map(
          (item: { name: TechStack }) => item.name
        );
        break;
      default:
        break;
    }

    return null;
  });

  return data;
};

export const parseItemProperties = (
  database: QueryDatabaseResponse
): Project[] =>
  (database.results as PageObjectResponse[])
    .map((row: PageObjectResponse) => {
      const {
        title,
        link,
        description,
        date,
        githubLink,
        stackTags,
        tag,
        color,
        number,
        image,
      } = (row as PartialDatabaseObjectResponse).properties;

      return {
        title: title.title[0].plain_text,
        link: link.url,
        text: description.rich_text[0].plain_text,
        date: date.rich_text[0].plain_text,
        github: githubLink.url,
        stack: stackTags.multi_select.map(
          ({ name }: { name: TechStack }) => TechStack[name] as string
        ),
        tag: Tags[tag.multi_select[0].name],
        color: AccentColours[color.rich_text[0].plain_text],
        orderNum: number.number,
        image: image?.rich_text[0]?.plain_text || "",
      };
    })
    .sort((a, b) => a.orderNum - b.orderNum);

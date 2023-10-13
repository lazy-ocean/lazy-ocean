// @ts-nocheck
import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { MainData, Roles, Tags, TechStack } from "../components/interfaces";
import { AccentColours } from "../theme";

export const parseMainProperties = (
  database: QueryDatabaseResponse
): MainData => {
  const data = {
    cv: "/Vladlena_Panchenko_CV.pdf",
    header: "Hello! 👋<br/>I am Vladlena Panchenko",
    description: `I'm a Frontend Engineer at <a href="https://www.wundermanthompson.com/expertise/technology" target="_blank" rel="noopener nofollow noreferrer">Wunderman Thompson Technology</a><br/>I love developing complex and accessible web-interfaces and always eager to try something new.<br/>Siberian-born living in Gdansk, Poland.`,
    tags: {
      Frontend: [
        TechStack.TypeScript,
        TechStack.JavaScript,
        TechStack.react,
        TechStack.Next,
        TechStack.Remix,
      ],
      Testing: [TechStack.Jest, TechStack.cypress],
      "Everything else": [
        TechStack.a11y,
        TechStack.styled,
        TechStack.npm,
        TechStack.gulp,
        TechStack.express,
      ],
    },
  };

  (database.results as PageObjectResponse[]).map((row: PageObjectResponse) => {
    const role = row.properties.role.title[0].plain_text;

    switch (role) {
      case Roles.cv:
        data.cv = row.properties.file.files[0].file.url;
        break;
      case Roles.header:
      case Roles.description:
        data.header = row.properties.content.rich_text[0].plain_text;
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
      } = (row as PartialDatabaseObjectResponse).properties as Record<
        string,
        any
      >;

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
      };
    })
    .sort((a, b) => a.orderNum - b.orderNum);

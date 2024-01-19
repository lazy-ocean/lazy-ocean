import { remark } from "remark";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
//@ts-ignore
import remarkHeaderId from "remark-heading-id";
//@ts-ignore
import rehypeStarryNight from "@microflash/rehype-starry-night";

export default async function markdownToHtml(
  markdown: string
): Promise<string> {
  const result = await remark()
    .use(remarkHeaderId)
    .use(remarkParse)
    //@ts-ignore
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStarryNight)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}

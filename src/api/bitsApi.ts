import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Bits } from "@/2023/interfaces";

const bitsDirectory = join(process.cwd(), "_bits");

export function getPostSlugs() {
  return fs.readdirSync(bitsDirectory);
}

export const getAllBits = (): Bits => {
  const fullPath = join(bitsDirectory, `bits.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return data as Bits;
};

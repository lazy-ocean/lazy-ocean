const postsMap: { [key: string]: { title: string; images: string } } = {
  "2023-upgrade": {
    title: "How this website was built",
    images:
      "stickers/design.png,stickers/programming.png,stickers/sand-clock.png",
  },
  "bits-jan-24": {
    title: "Awesome finds - January 2024",
    images: "stickers/santa.png,stickers/music.png,stickers/perfume.png",
  },
  "bits-feb-24": {
    title: "Awesome finds - February 2024",
    images: "stickers/books.png,stickers/clapperboard.png,stickers/coding.png",
  },
  "newsletters-tech": {
    title: "Newsletters I read: frontend + design edition",
    images: "stickers/email.png,stickers/css.png,stickers/webdesign.png",
  },
  "dynamic-og-image": {
    title: "Dynamic OG image with Next.js",
    images: "stickers/image.png,stickers/meta.png,stickers/code.png",
  },
};

export const getOGMeta = (slug: string) => postsMap[slug];

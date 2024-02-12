const postsMap: { [key: string]: { title: string; images: string } } = {
  "2023-upgrade": {
    title: "How this website was built",
    images:
      "stickers/design.png,stickers/programming.png,stickers/sand-clock.png",
  },
  "jan-bits": {
    title: "Awesome finds - January 2024",
    images: "stickers/santa.png,stickers/music.png,stickers/perfume.png",
  },
  "newsletters-tech": {
    title: "Newsletters I read: frontend + design edition",
    images: "stickers/email.png,stickers/css.png,stickers/webdesign.png",
  },
};

export const getPostsName = (slug: string) => postsMap[slug];

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
  "bits-mar-24": {
    title: "Awesome finds - March 2024",
    images: "stickers/css-1.png,stickers/musics.png,stickers/robotic.png",
  },
  "bits-apr-24": {
    title: "Awesome finds - April 2024",
    images: "stickers/puck.png,stickers/podcast.png,stickers/airplane.png",
  },
  "newsletters-tech": {
    title: "Newsletters I read: frontend + design edition",
    images: "stickers/email.png,stickers/css.png,stickers/webdesign.png",
  },
  "dynamic-og-image": {
    title: "Dynamic OG image with Next.js",
    images: "stickers/image.png,stickers/meta.png,stickers/code.png",
  },
  "oh-devin": {
    title: "Generative AI + frontend: how to stay relevant",
    images: "stickers/ai.png,stickers/speed.png,stickers/programmer.png",
  },
  "love-hate-tailwind": {
    title: "Love, Hate, and Tailwind CSS",
    images: "stickers/hate.png,stickers/tailwind.png,stickers/styles.png",
  },
};

export const getOGMeta = (slug: string) => postsMap[slug];

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
  "bits-may-24": {
    title: "Awesome finds - May 2024",
    images:
      "stickers/mona-lisa.png,stickers/detective.png,stickers/woman-programmer.png",
  },
  "bits-jun-24": {
    title: "Awesome finds - June 2024",
    images: "stickers/brush.png,stickers/performance.png,stickers/poland.png",
  },
  "bits-jul-aug-24": {
    title: "Awesome finds - July/August 2024",
    images:
      "stickers/sakura.png,stickers/taj-mahal.png,stickers/global-warming.png",
  },
  "bits-sept-oct-24": {
    title: "Awesome finds - September/October 2024",
    images:
      "stickers/building.png,stickers/running.png,stickers/vaccination.png",
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
  "hard-stuff": {
    title: "My toughest frontend battles (and lessons learned)",
    images: "stickers/fire.png,stickers/stress.png,stickers/success.png",
  },
  "advent-of-code": {
    title: "Advent of Code: become a better dev in a month",
    images:
      "stickers/advent-calendar.png,stickers/santa-hat.png,stickers/christmas-day.png",
  },
};

export const getOGMeta = (slug: string) => postsMap[slug];

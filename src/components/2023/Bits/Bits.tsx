import { getAllBits } from "@/api/bitsApi";
import styles from "./Bits.module.css";
import { Bits as BitsType, BitsTypes } from "@/2023/interfaces";

const EMOJI_MAP = {
  [BitsTypes.concert]: "🎤",
  [BitsTypes.movie]: "🎬",
  [BitsTypes.album]: "💿",
  [BitsTypes.book]: "📙",
  [BitsTypes.podcast]: "🎙️",
};

const HEADING_MAP = {
  [BitsTypes.concert]: "Most recent gig",
  [BitsTypes.movie]: "Latest liked movie",
  [BitsTypes.album]: "Latest fav album",
  [BitsTypes.book]: "Currently reading",
  [BitsTypes.podcast]: "Latest fav podcast",
};

export const Bits = async () => {
  const bitsData: BitsType = getAllBits();

  return (
    <div className={styles.list} role="list">
      {(Object.keys(bitsData) as BitsTypes[]).map((item) => (
        <div className={styles.card} key={item}>
          <span className={styles.emoji}>{EMOJI_MAP[item]}</span>
          <div className="flexColumn">
            <span>{HEADING_MAP[item]}</span>
            <span style={{ fontStyle: "italic" }}>{bitsData[item]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

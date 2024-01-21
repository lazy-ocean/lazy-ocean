import Footer from "@/2023/Footer/Footer";
import styles from "./posts.module.css";
import "highlight.js/styles/default.css";
import "../highlight.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${styles.container} flexColumn`}>
        {children}
        <Footer cv="/Vladlena_Panchenko_CV.pdf" />
      </body>
    </html>
  );
}

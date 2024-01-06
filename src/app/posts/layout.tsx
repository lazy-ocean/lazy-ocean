import Footer from "../../components/2023/Footer/Footer";
import styles from "./posts.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.container}>{children}</div>
        <Footer cv="/Vladlena_Panchenko_CV.pdf" />
      </body>
    </html>
  );
}

import { Header } from "../../components/2023/Header/Header";
import styles from "./posts.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={styles.container}>
        <Header />
        {children}
      </body>
    </html>
  );
}

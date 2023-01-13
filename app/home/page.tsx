import { Header } from '../../components/Header';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <main className={styles.mainContent}>
        <aside className={styles.categories}>SIDEBAR</aside>
        <div className={styles.products}>MAIN CONTENT</div>
      </main>
    </div>
  );
}

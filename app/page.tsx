'use client'
import styles from './page.module.css'

export default function Home() {
  // fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  return (
    <main className={styles.mainContainer}>
      <section className={styles.mainHome}>
        <aside className={styles.featured}>
          FEATURED
        </aside>
        <div className={styles.logo}>
          <h1>LOGO</h1>
          <p>explore</p>
        </div>
      </section>
      <section className={styles.offers}>
        <p>OFFERS</p>
      </section>
    </main>
  )
}

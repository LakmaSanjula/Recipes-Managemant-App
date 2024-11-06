import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const PortFolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/foods" className={styles.item}>
          <span className={styles.title}>Food</span>
        </Link>
        <Link href="/portfolio/beverages" className={styles.item}>
          <span className={styles.title}>Beverages</span>
        </Link>
        <Link href="/portfolio/snacks" className={styles.item}>
          <span className={styles.title}>Snaks</span>
        </Link>
      </div>
    </div>
  );
};

export default PortFolio;

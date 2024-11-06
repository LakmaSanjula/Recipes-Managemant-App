import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/img/Hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>EASY COOK Food Recipes</h1>
        <p className={styles.desc}>
          Recipe management is a must-have capability for operators to achieve
          dish consistency, monitor and control costs, and successfully set menu
          prices.
        </p>
        <Button Button url="/portfolio" text="See Our Recipes" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Hero Image" className={styles.img} />
      </div>
    </div>
  );
}

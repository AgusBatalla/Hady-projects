import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Welcome!
        </h1>
        <p className={styles.desc}>
        Do you need an illustration, website, or application? Visit our portfolio.
        </p>
        <Button url="/portfolio" text="Portfolio"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}

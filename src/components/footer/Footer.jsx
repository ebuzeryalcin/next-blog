import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Ebuzer Yalcin. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={20} height={20} className={styles.icon} alt="Ebuzer Facebook Account" />
        <Image src="/2.png" width={20} height={20} className={styles.icon} alt="Ebuzer" />
        <Image src="/3.png" width={20} height={20} className={styles.icon} alt="Ebuzer" />
        <Image src="/4.png" width={20} height={20} className={styles.icon} alt="Ebuzer" />
      </div>
    </div>
  );
};

export default Footer;

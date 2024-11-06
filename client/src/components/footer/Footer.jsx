import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2024 Developer. All rights reserved.</div>
      <div className={styles.socialMedia}>
        <Image
          src="/img/facebook.png"
          width={20}
          height={20}
          className={styles.mediaIcons}
          alt="facebook"
        />
        <Image
          src="/img/insta.png"
          width={20}
          height={20}
          className={styles.mediaIcons}
          alt="insta"
        />
        <Image
          src="/img/pinterest.png"
          width={20}
          height={20}
          className={styles.mediaIcons}
          alt="pinterest"
        />
        <Image
          src="/img/twitter.png"
          width={20}
          height={20}
          className={styles.mediaIcons}
          alt="twitter"
        />
        <Image
          src="/img/youtube.png"
          width={20}
          height={20}
          className={styles.mediaIcons}
          alt="youtube"
        />
      </div>
    </div>
  );
}

export default Footer

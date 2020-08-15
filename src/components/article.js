import React from 'react';
import Image from 'gatsby-image';

import styles from './article.module.scss';

export default ({ content, altRow }) => (
  <article className={`${styles.article}${altRow ? ` ${styles.altRow}` : ""}`}>
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.details}>
        <h1 className={styles.title} dangerouslySetInnerHTML={{__html: content.title}} />
        <p className={styles.date} dangerouslySetInnerHTML={{__html: content.date}} />
        <p className={styles.description} dangerouslySetInnerHTML={{__html: content.description}} />
      </div>
      <Image fixed={content.graphic.childImageSharp.fixed} className={styles.graphic} imgStyle={{objectFit: 'contain'}}
          alt={content.altText} />
    </div>
  </article>
);

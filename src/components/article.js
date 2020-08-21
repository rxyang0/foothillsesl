/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import styles from './article.module.scss';

export default function Article({ content, altRow }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('in');
    }
  }, [controls, inView]);
  const mal = {
    out: { y: 150 },
    in: { y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
  };
  return (
    <motion.article
      className={`${styles.article}${altRow ? ` ${styles.altRow}` : ''}`}
      inherit={false}
      variants={mal}
      initial="out"
      animate={controls}
      ref={ref}
    >
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.details}>
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: content.title }}
          />
          <p
            className={styles.date}
            dangerouslySetInnerHTML={{ __html: content.date }}
          />
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: content.description }}
          />
        </div>
        <Image
          fixed={content.graphic ? content.graphic.childImageSharp.fixed : false}
          className={styles.graphic}
          imgStyle={{ objectFit: 'contain' }}
          alt={content.altText}
        />
      </div>
    </motion.article>
  );
}

Article.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    graphic: PropTypes.objectOf(PropTypes.object),
    altText: PropTypes.string,
  }).isRequired,
  altRow: PropTypes.bool.isRequired,
};

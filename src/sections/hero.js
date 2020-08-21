import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { motion } from 'framer-motion';

import styles from './hero.module.scss';

const query = graphql`
  query {
    heroLaptopMeeting: file(relativePath: { eq: "assets/hero-laptop-meeting.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default function Hero({ title, subtitle }) {
  const data = useStaticQuery(query);
  const [hovering, setHovering] = useState(false);
  return (
    <header className={styles.hero}>
      <motion.div
        className={styles.heroBackground}
        animate={{ scale: 1.03, filter: 'blur(2px)' }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        whileHover={{ scale: 1.15, filter: 'blur(0px)' }}
        transition={{
          scale: { ease: 'easeInOut', duration: 1.5 },
          filter: { ease: 'easeInOut', duration: 0.5 },
        }}
      >
        <Image
          fluid={data.heroLaptopMeeting.childImageSharp.fluid}
          alt="Laptop in online meeting"
          className={styles.heroBackground}
          draggable={false}
        />
      </motion.div>
      <motion.div
        className={styles.scrim}
        animate={{ opacity: hovering ? 0 : 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      />
      <motion.div
        className={styles.heroContent}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1, opacity: hovering ? 0.6 : 1 }}
        transition={{
          scale: { ease: 'easeInOut', duration: 1.5 },
          opacity: { ease: 'easeInOut', duration: 0.5 },
        }}
      >
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </motion.div>
    </header>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Hero.defaultProps = {
  title: '',
  subtitle: '',
};

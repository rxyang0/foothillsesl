import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleLeft, FaAngleRight, FaCircle } from 'react-icons/fa';

import styles from './hero.module.scss';

const query = graphql`
  query {
    heroLaptopMeeting: file(relativePath: { eq: "assets/hero-laptop-meeting.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroGardenTour: file(relativePath: { eq: "assets/hero-garden-tour.mp4" }) {
      publicURL
    }
    heroCanadaParty: file(relativePath: { eq: "assets/hero-canada-party.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroScavengerHunt: file(relativePath: { eq: "assets/hero-scavenger-hunt.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default function Hero({ title, subtitle }) {
  const data = useStaticQuery(query);

  const [hovering, setHovering] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);

  const heroBackgrounds = [
    <motion.video preload="auto" muted autoPlay playsInline className={styles.heroBackground}>
      <source src={data.heroGardenTour.publicURL} type="video/mp4" />
    </motion.video>,

    <Image
      fluid={data.heroLaptopMeeting.childImageSharp.fluid}
      alt="Photo of laptop in an online meeting"
      className={styles.heroBackground}
      draggable={false}
    />,

    <Image
      fluid={data.heroCanadaParty.childImageSharp.fluid}
      alt="Screenshot of the Canada Party online meeting"
      className={styles.heroBackground}
      draggable={false}
    />,

    <Image
      fluid={data.heroScavengerHunt.childImageSharp.fluid}
      alt="Photo of iPad in the Scavenger Hunt online meeting"
      className={styles.heroBackground}
      draggable={false}
    />,
  ];

  const mal = {
    pageInitial: (custom) => ({ x: custom > 0 ? '100vw' : '-100vw' }),
    pageAnimate: {
      x: 0,
      transition: { ease: 'easeInOut', duration: 0.5 },
    },
    pageExit: (custom) => ({
      x: custom > 0 ? '-100vw' : '100vw',
      transition: { ease: 'easeInOut', duration: 0.5 },
    }),
  };

  const paginate = (change) => {
    const len = heroBackgrounds.length;
    /* Wrap with mod: a mod b = ((a % b) + b) % b) */
    setPage([(((page + change) % len) + len) % len, change]);
  };

  useEffect(() => {
    /* Do not advance while hovering */
    const slideshow = setInterval(() => !hovering && paginate(1), 8000);
    return () => clearInterval(slideshow);
  }, [hovering, page]);

  return (
    <header className={styles.hero}>
      <motion.div
        className={styles.heroBackground}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        animate={{ scale: hovering ? 1.15 : 1.03, filter: hovering ? 'blur(0px)' : 'blur(2px)' }}
        transition={{
          scale: { ease: 'easeInOut', duration: 1.5 },
          filter: { ease: 'easeInOut', duration: 0.5 },
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className={styles.heroBackground}
            key={page}
            variants={mal}
            custom={direction}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
          >
            {heroBackgrounds[page]}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div
        className={styles.scrim}
        animate={{ opacity: hovering ? 0 : 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      />

      <span
        role="button"
        tabIndex="0"
        className={styles.paginateLeft}
        onClick={() => paginate(-1)}
        onKeyPress={() => paginate(-1)}
        aria-label="Previous slideshow photo"
      >
        <FaAngleLeft />
      </span>

      <span
        role="button"
        tabIndex="0"
        className={styles.paginateRight}
        onClick={() => paginate(1)}
        onKeyPress={() => paginate(1)}
        aria-label="Next slideshow photo"
      >
        <FaAngleRight />
      </span>

      <div className={styles.pageSelector}>
        {heroBackgrounds.map((bg, index) => (
          <FaCircle
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={{ opacity: index === page ? 0.6 : 0.2 }}
            onClick={() => paginate(index - page)}
          />
        ))}
      </div>

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

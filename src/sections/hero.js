import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

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
  useEffect(() => {
    const hero = document.querySelector(`.${styles.hero}`);
    const heroBg = hero.querySelector(`.${styles.heroBackground}`);
    const heroTransformInit = 'scale(1.03)';
    const heroFilterInit = 'blur(2px)';
    const heroTransformFinal = 'scale(1.1)';
    const heroFilterFinal = 'blur(0)';
    heroBg.style.transform = heroTransformInit;
    heroBg.style.filter = heroFilterInit;
    /* Chrome bug: changes to transform-origin have no effect until transform transition ends
        https://stackoverflow.com/questions/57000539/chrome-75-break-transform-origin-animation */
    // const handleMouseMove = (evt) => {
    //   heroBg.style.transformOrigin = `${evt.clientX}px ${evt.clientY}px`;
    // }
    // hero.addEventListener('mousemove', handleMouseMove);
    const handleMouseOver = () => {
      heroBg.style.transform = heroTransformFinal;
      heroBg.style.filter = heroFilterFinal;
    };
    const handleMouseOut = () => {
      heroBg.style.transform = heroTransformInit;
      heroBg.style.filter = heroFilterInit;
    };
    hero.addEventListener('mouseover', handleMouseOver);
    hero.addEventListener('mouseout', handleMouseOut);
    hero.addEventListener('touchstart', handleMouseOver, { passive: true });
    hero.addEventListener('touchend', handleMouseOut, { passive: true });
  });
  return (
    <header className={styles.hero}>
      <Image
        fluid={data.heroLaptopMeeting.childImageSharp.fluid}
        alt="Laptop in online meeting"
        className={styles.heroBackground}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
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

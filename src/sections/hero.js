import React, { useEffect } from 'react';
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

export default ({ title, subtitle }) => {
  const data = useStaticQuery(query);
  useEffect(() => {
    const header = document.querySelector(`.${styles.header}`);
    const heroImage = header.querySelector(`.${styles.heroImage}`);
    /* Chrome bug: changes to transform-origin have no effect until transform transition ends
        https://stackoverflow.com/questions/57000539/chrome-75-break-transform-origin-animation */
    // const handleMouseMove = (evt) => {
    //   heroImage.style.transformOrigin = `${evt.clientX}px ${evt.clientY}px`;
    // }
    // header.addEventListener('mousemove', handleMouseMove);
    const handleMouseOver = (evt) => {
      heroImage.style.transform = 'scale(1.1)';
      heroImage.style.filter = 'blur(0)';
    }
    const handleMouseOut = (evt) => {
      heroImage.style.transform = 'scale(1.03)';
      heroImage.style.filter = 'blur(2px)';
    }
    header.addEventListener('mouseover', handleMouseOver);
    header.addEventListener('mouseout', handleMouseOut);
    header.addEventListener('touchstart', handleMouseOver, {passive: true});
    header.addEventListener('touchend', handleMouseOut, {passive: true});
  });
  return (
    <header className={styles.header}>
      <Image fluid={data.heroLaptopMeeting.childImageSharp.fluid} alt="Laptop in online meeting"
          className={styles.heroImage} />
      <div className={`container ${styles.headerText}`}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
    </header>
  );
}

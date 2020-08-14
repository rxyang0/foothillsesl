import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styles from './hero.module.scss';

const query = graphql`
  query {
    heroLaptopMeeting: file(relativePath: { eq: "hero-laptop-meeting.jpg" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ({ title, subtitle }) => {
  const data = useStaticQuery(query);
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

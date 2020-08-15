import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './classes-events.module.scss';
import Pane from '../components/pane';

export default () => {
  const data = useStaticQuery(query);
  const [ tab, setTab ] = useState('classes');
  useEffect(() => {
    const sliderBounds = document.querySelector(`.${styles.sliderBounds}`);
    const classesTab = sliderBounds.querySelector(`.${styles.classesTab}`);
    const eventsTab = sliderBounds.querySelector(`.${styles.eventsTab}`);
    const slider = sliderBounds.querySelector(`.${styles.slider}`);
    const handleClassesTab = () => {
      setTab('classes');
      slider.style.left = '0%';
      classesTab.style.color = '#fff';
      eventsTab.style.color = '#000';
    }
    const handleEventsTab = () => {
      setTab('events');
      slider.style.left = '50%';
      classesTab.style.color = '#000';
      eventsTab.style.color = '#fff';
    }
    classesTab.addEventListener('click', handleClassesTab);
    eventsTab.addEventListener('click', handleEventsTab);
  });
  return (
    <>
      <div className={styles.tabSelector}>
        <div className={`container ${styles.sliderBounds}`}>
          <div className={styles.classesTab}>See Classes</div>
          <div className={styles.eventsTab}>See Events</div>
          <div className={styles.slider} />
        </div>
      </div>
      {tab === 'events' && <Pane edges={data.allEventsYaml.edges} />}
      {tab === 'classes' && <Pane edges={data.allClassesYaml.edges} />}
    </>
  );
}

export const query = graphql`
  query {
    allClassesYaml {
      edges {
        node {
          title
          date
          description
          graphic {
            childImageSharp {
              fixed(height: 204) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    allEventsYaml {
      edges {
        node {
          title
          date
          description
          graphic {
            childImageSharp {
              fixed(height: 204) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;

import React, { useState, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';

import styles from './classes-events.module.scss';
import Pane from '../components/pane';

const query = graphql`
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
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
    allFutureYaml {
      edges {
        node {
          title
          date
          description
          graphic {
            childImageSharp {
              fixed(height: 204) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

export default function ClassesEvents() {
  const data = useStaticQuery(query);
  const [tab, setTab] = useState('classes');

  const sliderBounds = useRef(null);
  const sliderControls = useAnimation();

  const handleSetTab = (newTab) => {
    switch (newTab) {
      case 'classes':
        sliderControls.start({ x: 0 });
        setTab('classes');
        break;
      case 'events':
        sliderControls.start({ x: sliderBounds.current.offsetWidth / 2 });
        setTab('events');
        break;
      default:
    }
  };

  const handleSliderDragEnd = (evt, { offset }) => {
    if (Math.abs(offset.x) > (sliderBounds.current.offsetWidth / 4)) { // Sufficient drag
      handleSetTab(offset.x > 0 ? 'events' : 'classes');
    } else { // Insufficient drag: reset
      handleSetTab(tab);
    }
  };

  const handleSliderBoundsClick = (evt) => {
    if (evt.target === sliderBounds.current) { // Do not trigger on slider drag end
      if (evt.offsetX < sliderBounds.current.offsetWidth / 2) {
        handleSetTab('classes');
      } else {
        handleSetTab('events');
      }
    }
  };

  const mal = {
    hide: { opacity: 0 },
    out: { y: '100vh' },
    in: { y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
  };

  return (
    <>
      <motion.div
        className={`container ${styles.sectionHeading}`}
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        <p className={styles.sectionTitle} style={{ paddingBottom: '2rem' }}>Fall 2020</p>
        <p>
          We are currently hosting classes and events via Zoom online meetings.
          {' Please email '}
          <a href="mailto:esl@foothillsalliance.com">esl@foothillsalliance.com</a>
          {' to receive the invitation emails.'}
        </p>
      </motion.div>
      <div className={styles.futureLink}>
        <Link to="future" smooth="easeInOutQuad" duration={800}>
          See Future Classes
        </Link>
      </div>
      <motion.div
        ref={sliderBounds}
        className={`${styles.sliderBounds}`}
        onTap={handleSliderBoundsClick}
      >
        <div
          className={styles.classesTab}
          style={{ color: tab === 'classes' ? '#fff' : '#000' }}
        >
          <span>See Classes</span>
        </div>
        <div
          className={styles.eventsTab}
          style={{ color: tab === 'events' ? '#fff' : '#000' }}
        >
          <span>See Events</span>
        </div>
        <motion.div
          className={styles.slider}
          animate={sliderControls}
          transition={{ ease: 'easeInOut', duration: 0.2 }}
          drag="x"
          dragConstraints={sliderBounds}
          dragElastic={0}
          dragMomentum={false}
          onDragEnd={handleSliderDragEnd}
        />
      </motion.div>
      <hr className={styles.sectionDivider} style={{ paddingBottom: '1.75rem' }} />
      <section className={styles.classesEvents}>
        <AnimatePresence>
          {tab === 'classes' && (
            <motion.section key="classes" variants={mal} initial="out" animate="in" exit="hide">
              <Pane edges={data.allClassesYaml.edges} />
            </motion.section>
          )}
          {tab === 'events' && (
            <motion.section key="events" variants={mal} initial="out" animate="in" exit="hide">
              <Pane edges={data.allEventsYaml.edges} />
            </motion.section>
          )}
        </AnimatePresence>
      </section>
      <hr className={styles.sectionDivider} style={{ marginTop: '2rem' }} />
      <section id="future">
        <motion.section
          className={`container ${styles.sectionHeading}`}
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <p className={styles.sectionTitle}>Future Classes</p>
        </motion.section>
        <div className={styles.classesEvents}>
          <motion.section key="events" variants={mal} initial="out" animate="in" exit="hide">
            <Pane edges={data.allFutureYaml.edges} />
          </motion.section>
        </div>
      </section>
    </>
  );
}

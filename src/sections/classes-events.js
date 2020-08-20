import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
  }
`;

export default function ClassesEvents() {
  const data = useStaticQuery(query);
  const [tab, setTab] = useState('classes');
  useEffect(() => {
    const sliderBounds = document.querySelector(`.${styles.sliderBounds}`);
    const classesTab = sliderBounds.querySelector(`.${styles.classesTab}`);
    const eventsTab = sliderBounds.querySelector(`.${styles.eventsTab}`);
    const slider = sliderBounds.querySelector(`.${styles.slider}`);
    const sliderWidth = slider.offsetWidth;
    const sliderTransition = 'left 0.2s ease-in-out';
    let prevLeft;
    let startX;
    let holding;
    const handleSwitchTab = (tabName) => {
      if (tabName === 'classes') {
        slider.style.left = '0px';
        classesTab.style.color = '#fff';
        eventsTab.style.color = '#000';
      } else {
        slider.style.left = `${sliderWidth}px`;
        classesTab.style.color = '#000';
        eventsTab.style.color = '#fff';
      }
      setTab(tabName);
    };
    const handleSliderMouseDown = (evt) => {
      evt.preventDefault(); // Prevent text selection when dragging
      prevLeft = parseInt(getComputedStyle(slider).left, 10);
      startX = evt.type === 'touchstart' ? evt.touches[0].clientX : evt.clientX;
      holding = true;
      slider.style.transition = 'none';
    };
    const handleSliderMouseMove = (evt) => {
      if (holding) {
        evt.preventDefault(); // Prevent touch scroll
        /* Update left with prevLeft + diff */
        const currentX = evt.type === 'touchmove' ? evt.touches[0].clientX : evt.clientX;
        let left = prevLeft + (currentX - startX);
        /* Prevent dragging past slider bounds */
        if (left < 0) {
          left = 0;
        } else if (left > sliderWidth) {
          left = sliderWidth;
        }
        slider.style.left = `${left}px`;
      }
    };
    const handleSliderMouseUp = (evt) => {
      holding = false;
      slider.style.transition = sliderTransition;
      const sliderChange = parseInt(getComputedStyle(slider).left, 10) - prevLeft;
      if (Math.abs(sliderChange) > sliderWidth / 2) { // Sufficient drag
        handleSwitchTab(sliderChange > 0 ? 'events' : 'classes');
      } else { // Insufficient drag, or click
        const clickX = evt.clientX - sliderBounds.getBoundingClientRect().left;
        if (evt.target === sliderBounds) { // Click: mouseup event attached to document
          handleSwitchTab(clickX > sliderWidth ? 'events' : 'classes');
        } else { // Insufficient drag: reset
          slider.style.left = `${prevLeft}px`;
        }
      }
    };
    slider.addEventListener('mousedown', handleSliderMouseDown);
    document.addEventListener('mousemove', handleSliderMouseMove);
    document.addEventListener('mouseup', handleSliderMouseUp);
    slider.addEventListener('touchstart', handleSliderMouseDown, { passive: true });
    slider.addEventListener('touchmove', handleSliderMouseMove, { passive: true });
    slider.addEventListener('touchend', handleSliderMouseUp, { passive: true });
  });
  return (
    <>
      <div className={styles.tabSelector}>
        <div className={`container ${styles.sliderBounds}`}>
          <div className={styles.classesTab}><span>See Classes</span></div>
          <div className={styles.eventsTab}><span>See Events</span></div>
          <div className={styles.slider} />
        </div>
      </div>
      {tab === 'classes' && <Pane edges={data.allClassesYaml.edges} />}
      {tab === 'events' && <Pane edges={data.allEventsYaml.edges} />}
    </>
  );
}

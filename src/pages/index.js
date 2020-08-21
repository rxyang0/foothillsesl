import React from 'react';
import { motion } from 'framer-motion';

import styles from './index.module.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../sections/hero';
import ClassesEvents from '../sections/classes-events';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="ESL Classes" />
      <Hero
        title="ESL Classes and More"
        subtitle="Welcome all beginner, intermediate, and advanced students!"
      />
      <motion.section
        className={`container ${styles.sectionMessage}`}
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        <p className="font-medium" style={{ paddingBottom: '2rem' }}>
          Fall classes will begin in September 2020. We will update this website!
        </p>
        <p>
          We are currently hosting classes and events via Zoom online meetings.
          {' Please email '}
          <a href="mailto:esl@foothillsalliance.com">esl@foothillsalliance.com</a>
          {' to receive the invitation emails.'}
        </p>
      </motion.section>
      <ClassesEvents />
    </Layout>
  );
}

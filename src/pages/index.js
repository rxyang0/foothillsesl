import React from 'react';

import styles from './index.module.scss';
import Default from '../layouts/default';
import SEO from '../components/seo';
import Hero from '../sections/hero';
import Table from '../components/table';

export default () => (
  <Default>
    <SEO title="ESL Classes" />
    <Hero title="ESL Classes and More" subtitle="Welcome all beginner, intermediate, and advanced students!" />
    <div className="container">
      <section className={styles.message}>
        <p>
          We are currently hosting the following classes via Zoom online meetings.
        </p>
        <p>
          Please email <a href="mailto:esl@foothillsalliance.com">esl@foothillsalliance.com</a>
          {' '}to be added to the invitation emails.
        </p>
      </section>
      <Table name="classes" />
      <Table name="events" />
    </div>
  </Default>
);

import React from 'react';

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
      <section className={styles.sectionMessage}>
        <div className="container">
          <p>We are currently hosting classes and events via Zoom online meetings.</p>
          <p>
            {'Please email '}
            <a href="mailto:esl@foothillsalliance.com">esl@foothillsalliance.com</a>
            {' to receive the invitation emails.'}
          </p>
        </div>
      </section>
      <ClassesEvents />
    </Layout>
  );
}

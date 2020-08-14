import React from 'react';
import { graphql } from 'gatsby';

import styles from './index.module.scss';
import Default from '../layouts/default';
import SEO from '../components/seo';
import Hero from '../sections/hero';
import Table from '../components/table';

export default ({ data }) => (
  <Default>
    <SEO title="ESL Classes" />
    <Hero title="ESL Classes and More" subtitle="Welcome all beginner, intermediate, and advanced students!" />
    <div className="container">
      <section className={styles.sectionMessage}>
        <p>We are currently hosting the following classes via Zoom online meetings.</p>
        <p>
          Please email <a href="mailto:esl@foothillsalliance.com">esl@foothillsalliance.com</a>
          {' '}to be added to the invitation emails.
        </p>
      </section>
      <Table title="Classes" edges={data.allClassesYaml.edges} />
      <Table title="Events" edges={data.allEventsYaml.edges} />
    </div>
  </Default>
);

export const query = graphql`
  query {
    allClassesYaml {
      edges {
        node {
          title
          date
          description
        }
      }
    }
    allEventsYaml {
      edges {
        node {
          title
          date
          description
        }
      }
    }
  }
`;

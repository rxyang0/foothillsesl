import React from 'react';

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
      <ClassesEvents />
    </Layout>
  );
}

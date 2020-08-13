import React from 'react';

import styles from './404.module.scss';
import Default from '../layouts/default';
import SEO from '../components/seo';


export default () => (
  <Default>
    <SEO title="404 Not Found" />
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Not Found</h2>
    </div>
  </Default>
);

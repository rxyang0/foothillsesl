import React from 'react';

import styles from './hero.module.scss';

export default ({ title, subtitle }) => (
  <header className={styles.header}>
    <div className="container">
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </div>
  </header>
);

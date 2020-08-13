import React from 'react';

import styles from './footer.module.scss';

export default () => (
  <footer className={styles.footer}>
    <div className="container">
      <p>
        ⓒ{' '}
        <a href="https://www.foothillsalliance.com/" target="_blank" rel="noreferrer">Foothills Alliance Church</a>
        {' '}2020
      </p>
      <p>
        Built with<span role="img" aria-label="love"> ❤️ </span>by{' '}
        <a href="https://rxyang.ca" target="_blank" rel="noreferrer">Richard Yang</a>
      </p>
    </div>
  </footer>
);

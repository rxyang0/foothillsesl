import React from 'react';
import { Link } from 'gatsby';

import styles from './navbar.module.scss';
import logo from '../assets/FAC-IM-logo-white-100w.png';

export default () => (
  <nav className={styles.nav}>
    <Link to="/" className={styles.navLogo}>
      <img src={logo} alt="Foothills Intercultural Ministries Logo" />
    </Link>
  </nav>
);

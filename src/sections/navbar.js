import React from "react";
import { Link } from "gatsby";

import styles from "./navbar.module.css";
import logo from "../assets/FAC-IM-logo-white-100w.png";

export default () => (
  <nav className={styles.nav}>
    <Link to="/">
      <img src={logo} className={styles.navLogo} alt="Foothills Intercultural Ministries Logo" />
    </Link>
  </nav>
);

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import 'normalize.css';
import '../styles/styles.scss';
import favicon from '../../content/assets/favicon-192.png';
import Navbar from '../sections/navbar';
import Footer from '../sections/footer';

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <main style={{ backgroundColor: '#fff' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

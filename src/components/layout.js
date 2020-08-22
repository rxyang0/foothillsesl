import React from 'react';
import PropTypes from 'prop-types';

import 'normalize.css';
import '../styles/styles.scss';
import Navbar from '../sections/navbar';
import Footer from '../sections/footer';

export default function Layout({ children }) {
  return (
    <>
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

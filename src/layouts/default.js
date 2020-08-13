import React from 'react';
import { Helmet } from 'react-helmet';

import 'normalize.css';
import '../styles/global.scss';
import favicon from '../assets/favicon-192.png';
import Navbar from '../sections/navbar';
import Footer from '../sections/footer';

export default ({ children }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon}></link>
    </Helmet>
    <Navbar />
    <main style={{backgroundColor: "#fff"}}>
      {children}
    </main>
    <Footer />
  </>
);

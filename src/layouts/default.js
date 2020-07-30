import React from "react";
import { Helmet } from "react-helmet";

import "../css/style.css";
import favicon from "../assets/favicon-192.png"
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";

export default ({ children }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon}></link>
    </Helmet>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-white">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

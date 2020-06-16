import React from "react";

import "../css/style.css";
import Navbar from "../sections/navbar";
import Header from "../sections/header";
import Footer from "../sections/footer";

const Default = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Default;

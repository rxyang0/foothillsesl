import React from "react";

import "../css/style.css";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";

const Default = ({ children, title, subtitle }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Default;

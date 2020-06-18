import React from "react";

import "../css/style.css";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";

const Default = ({ children, title, subtitle }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 bg-white">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Default;

import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav className="sticky top-0 flex justify-center bg-blue-500 py-4">
    <div className="container text-center text-white font-bold text-2xl sm:text-3xl">
      <Link to="/">
        <span className="inline-block">Foothills Alliance Church&nbsp;</span>
        <span className="inline-block">Intercultural Ministries</span>
      </Link>
    </div>
  </nav>
);

export default Navbar;

import React from "react";

const Header = ({ title, subtitle }) => (
  <header className="flex flex-col justify-center h-64 bg-gray-200 shadow-md">
    <div className="container">
      <h1 className="text-center font-semibold text-2xl sm:text-5xl text-gray-900 pb-2">{title}</h1>
      <h2 className="text-center text-lg sm:text-xl text-gray-800">{subtitle}</h2>
    </div>
  </header>
);

export default Header;

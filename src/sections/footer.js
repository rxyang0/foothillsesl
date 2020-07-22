import React from "react";

const Footer = () => (
  <footer className="flex items-center justify-center bg-blue-dark py-6">
    <div className="container">
      <p className="text-center text-white">
        ⓒ{' '}
        <a href="https://www.foothillsalliance.com/" target="_blank" rel="noreferrer" className="underline">
          Foothills Alliance Church
        </a>
        {' '}2020
      </p>
      <p className="text-center text-white">
        Built with<span role="img" aria-label="love"> ❤️ </span>by{' '}
        <a href="https://rxyang.ca" target="_blank" rel="noreferrer" className="underline">Richard Yang</a>
      </p>
    </div>
  </footer>
);

export default Footer;

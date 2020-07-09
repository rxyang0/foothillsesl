import React from "react";

const Footer = () => (
  <footer className="flex items-center justify-center bg-blue-dark py-6">
    <div className="container">
      <p className="text-center text-white">
        <span className="inline-block">Copyright ⓒ&nbsp;</span>
        <span className="inline-block">Foothills Alliance Church 2020</span></p>
      <p className="text-center text-white">
        Built with<span role="img" aria-label="love"> ❤️ </span>&nbsp;by{' '}
        <a href="https://rxyang.ca" target="_blank" rel="noreferrer" className="underline">Richard Yang</a>
      </p>
    </div>
  </footer>
);

export default Footer;

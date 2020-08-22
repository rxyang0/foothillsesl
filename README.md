# Foothills Intercultural Ministries Website

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/da2d215f22a9472eb9c8082abe974a22)](https://www.codacy.com)
[![Lighthouse Score](content/assets/lighthouse-badge.svg)](https://developers.google.com/web/tools/lighthouse)
[![Netlify Status](https://api.netlify.com/api/v1/badges/d984bdb0-733d-435d-931a-78a8c64e0544/deploy-status)](https://app.netlify.com)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/premiumrich/foothillsesl)](https://github.com/premiumrich)

Near the beginning of summer 2020, I proposed the creation of this website in hopes of improving the attendance of a
local church's English classes and events. It quickly expanded into a full-stack endeavour. With a desire to uncap
extensibility and scalability, I chose to learn and utilize the most modern frameworks. This project fully optimizes for
a performant, mobile-first end-user experience by upholding best practices, the highest code quality, and excellent
Lighthouse audit scores.

## Software Stack

| Framework | Features |
| - | - |
| [React](https://reactjs.org) | Interactive and extensible UIs with encapsulated components |
| [Gatsby](https://www.gatsbyjs.com) | Incredible performance and SSG on top of React |
| [gatsby-image](https://www.gatsbyjs.com/plugins/gatsby-image) | Optimized image compression and lazyloading |
| [SASS](https://sass-lang.com) | Powerful CSS preprocessing to reduce coupling |
| [CSS Modules](https://github.com/css-modules/css-modules) | Scoped styles and separation of concerns |
| [GraphQL](https://graphql.org) | Specific queries and transformations of content |
| [Framer Motion](https://www.framer.com/motion) | Intuitive and engaging animations! |
| [Figma](https://www.figma.com/file/A4pAc6G5EnigtPFmbMdBwQ/foothillsesl.ca) | UI design and prototyping |

I opted not to use a CSS framework like [Bootstrap](https://getbootstrap.com) or [Tailwind CSS](https://tailwindcss.com)
to have everything tailor-made. All code was carefully written to always hold purpose.

## Content Source

Currently, all content and assets are sourced from YAML and image files that are committed to this repository. I am
working on a GraphQL integration with a Node.js headless CMS backend to allow other teams to edit the content with ease.

## Building Locally

1.  Install [Node.js and NPM](https://nodejs.org).

2.  Clone this repo and `cd` into this root folder.

3.  Run `npm install` to install all dependencies including Gatsby.

4.  Start the development server with `gatsby develop`, or create a production build with `gatsby build`.

5.  Access the development server at [localhost:8000](http://localhost:8000), or serve the production build with
    `gatsby serve` at [localhost:9000](http://localhost:9000).

6.  Any changes that you make to components and content will be hot-reloaded in the browser under the development server.

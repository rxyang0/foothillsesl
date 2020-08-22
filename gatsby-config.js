module.exports = {
  siteMetadata: {
    title: 'Foothills Intercultural Ministries',
    description: 'ESL classes and more for beginner, intermediate, and advanced students!',
    image: 'https://foothillsesl.ca/FAC-IM-logo-og.png',
    url: 'https://foothillsesl.ca',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['./src/styles/'],
        data: '@import "variables";',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        defaultQuality: 85,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './content/',
      },
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: `Foothills Intercultural Ministries`,
    description: `ESL classes and more for beginner, intermediate, and advanced students!`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [`./src/styles/`],
        data: `@import "variables";`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/assets/`,
      },
    },
  ],
}

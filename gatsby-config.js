module.exports = {
  siteMetadata: {
    title: `Tí-No-Ní Esgotos`,
    description: `Site oficial Ti-no-ni esgotos`,
    author: `@marcoescaleira`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tinoni-esgotos`,
        short_name: `tinoni`,
        start_url: `/`,
        background_color: `#54585a`,
        theme_color: `#FE5000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
};

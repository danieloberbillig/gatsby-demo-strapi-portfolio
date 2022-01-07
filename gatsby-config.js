/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `Some description goes here`,
    titleTemplate: `%s | WebDev Portfolio`,  // in browser tab
    url:`https://webreportingstudio.com`,
    twitterUsername: `@mytwittername`,
    image: `/mainImg.png`   //preview image (screenshot in /static),

  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`job`, `project`], // will throw error if type has no data, might have to use contentTye or collectionType (version depending)
        // contentTypes: [`job`], // will throw error if type has no data, might have to use contentTye or collectionType (version depending)
        singleTypes: [`about`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
    },
  ],
}

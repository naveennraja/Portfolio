module.exports = {
  pathPrefix: `/Portfolio`,
  siteMetadata: {
    title: `Naveen Raja — Principal Engineer`,
    description: `Front end developer portfolio — Naveen Nata Raja, Principal Engineer.`,
    author: `Naveen Nata Raja`,
    siteUrl: `https://naveennraja.github.io/Portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Naveen Raja Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#6366F1`,
        theme_color: `#6366F1`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}

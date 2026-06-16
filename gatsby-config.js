require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = "https://www.mmtischlerei.pl"

module.exports = {
  siteMetadata: {
    title: `M&M Tischlerei`,
    description: `Meble na wymiar, kuchnie, szafy, garderoby, meble łazienkowe i zabudowy stolarskie dla klientów z Polski i Niemiec.`,
    titleTemplate: `%s | M&M Tischlerei`,
    siteUrl,
    image: `/furniture.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [
          "/404",
          "/de/404.html",
          "/en/404.html",
          "/de/404/",
          "/en/404/",
          "/offer/schody/",
          "/de/offer/schody/",
          "/en/offer/schody/",
        ],
        resolveSiteUrl: () => siteUrl,
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Categories`,
            mapping: { image: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `Gallery`,
            queryName: `Gallery`,
            separateNodeType: true,
            mapping: { image: `fileNode` },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`pl`, `de`],
        defaultLanguage: `pl`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["es"],
          },
        ],
      },
    },
  ],
}

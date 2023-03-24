require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const config = require('./config')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

// Get Sanity config
// const {
//   api: { projectId, dataset }
// } = requireConfig('../studio/sanity.config.ts')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    pathPrefix,
    title: config.siteTitle,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    logo: config.siteLogo,
    headline: config.siteHeadline,
    siteLanguage: config.siteLanguage,
    ogLanguage: config.ogLanguage,
    author: config.author,
    twitter: config.userTwitter,
    facebook: config.ogSiteName
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-image',
    'gatsby-transformer-yaml',
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: config.googleTagID,

    //     // Include GTM in development.
    //     //
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,

    //     // datalayer to be set before GTM is loaded
    //     // should be an object or a function that is executed in the browser
    //     //
    //     // Defaults to null
    //     defaultDataLayer: { platform: 'gatsby' },

    //     // Name of the event that is triggered
    //     // on every Gatsby route change.
    //     //
    //     // Defaults to gatsby-route-change
    //     routeChangeEventName: 'gatsby-route-change',
    //   },
    // },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'hl2kfxw1',
        dataset: 'production',
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        // token: process.env.GATSBY_SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: false
      }
    },
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        // Sanity project info (required)
        projectId: 'hl2kfxw1',
        dataset: 'production'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'config',
        path: `${__dirname}/config`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `white`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: config.siteUrl,
    //     sitemap: `${config.siteUrl}/sitemap.xml`,
    //     policy: [{ userAgent: '*', allow: '/' }]
    //   }
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'src/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ]
}

/**
 * We're requiring a file in the studio folder to make the monorepo
 * work "out-of-the-box". Sometimes you would to run this web frontend
 * in isolation (e.g. on codesandbox). This will give you an error message
 * with directions to enter the info manually or in the environment.
 */

// function requireConfig(path) {
//   try {
//     return require('../studio/sanity.config.ts')
//   } catch (e) {
//     console.error(
//       'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
//     )
//     return {
//       api: {
//         projectId: process.env.GATSBY_SANITY_PROJECT_ID || '',
//         dataset: process.env.GATSBY_SANITY_DATASET || ''
//       }
//     }
//   }
// }

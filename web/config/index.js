const settings = require.resolve('../src/hooks/useSiteSettings.tsx')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  // Hardcoded values for pre-build
  siteUrl: 'https://www.meco-reno.com', // Domain of your site. No trailing slash!
  googleTagID: 'GTM-NLHXK4L',

  author: settings.author, // Author for schema.org JSONLD

  // Banner
  // banner: settings.banner.asset.url,
  banner: '',

  siteTitle: settings.title, // Navigation and Site Title
  siteTitleAlt: settings.titleAlt, // Alternative Site title for SEO
  siteTitleShort: settings.titleShort, // short_name for manifest
  siteHeadline: settings.headline, // Headline for schema.org JSONLD
  siteLanguage: settings.language, // Language Tag on <html> element
  siteLogo: settings.logo, // Used for SEO and manifest
  siteDescription: settings.description,
  userTwitter: settings.userTwitter, // Twitter Username
  ogSiteName: settings.ogSiteName, // Facebook Site Name
  ogLanguage: settings.ogLanguage, // og:language

  // Manifest and Progress color
  themeColor: settings.themeColor,
  backgroundColor: settings.backgroundColor
}

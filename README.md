# MECO | Mckinnies Equipment Co.

[![Netlify Status](https://api.netlify.com/api/v1/badges/bec7efc9-669c-4961-90c2-94a45908a4b3/deploy-status)](https://app.netlify.com/sites/elegant-mcclintock-fd6f1e/deploys)

## Features

- [x] Configurable
  - [x] Use the config to easily change the most important information
  - [x] Change the theming for styled-components
  - [x] Navigation powered by a .yaml file
  - [x] Layout driven by CSS-Grid
- [x] Create your projects by creating a folder full of images and adding an entry to a .yaml file
- [x] Shows your Instagram posts
- [x] TypeScript
- [x] Cypress for End-to-End testing
- [x] [Husky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged) for autofix each commit
- [x] react-spring animations
- [x] styled-components + styled-system + rebass for styling
- [x] styled-css-grid for css grid layouts
- [x] Polished for cool things
- [x] Google Analytics support
- [x] SEO
  - [x] Sitemap
  - [x] Schema.org JSONLD
  - [x] OpenGraph Tags
  - [x] Twitter Tags
- [x] Offline Support
- [x] WebApp Manifest Support
- [x] Responsive Images
  - [x] Right image sizes
  - [x] Blurred loading animation
  - [x] WebP support

## Getting Started

Check your development environment! You'll need [Node.js](https://nodejs.org/en/), the [Gatsby CLI](https://www.gatsbyjs.org/docs/) and [node-gyp](https://github.com/nodejs/node-gyp#installation) installed. The official Gatsby website also lists two articles regarding this topic:

- [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)
- [Check your development environment](https://www.gatsbyjs.org/tutorial/part-zero/)

### Configuring the Instagram source plugin

1. You need to have a Facebook page (I know... :/)
1. Go to your site settings -> Instagram -> Login into your Instagram account
1. Create a [app](https://developers.facebook.com/apps/)
1. Go to the [Graph API Explorer][gae]
   1. Select your App from the top right dropdown menu
   1. Select "Get User Access Token" from dropdown (right of access token field) and select needed permissions (manage_pages, pages_show_list, instagram_basic)
   1. Copy user access token
1. [Access Token Debugger][atd]:
   1. Paste copied token and press "Debug"
   1. Press "Extend Access Token" and copy the generated long-lived user access token
1. [Graph API Explorer][gae]:
   1. Paste copied token into the "Access Token" field
   1. Make a GET request with "PAGE_ID?fields=access_token"
   1. Find the permanent page access token in the response (node "access_token")
1. [Access Token Debugger][atd]:
   1. Paste the permanent token and press "Debug"
   1. "Expires" should be "Never"
   1. Copy the **access token**
1. [Graph API Explorer][gae]:

   1. Make a GET request with "PAGE_ID?fields=instagram_business_account" to get your **Business ID**

Now create a `.env` file at the root of the project with the following content:

```
BUSINESS_ID=YOUR_ID
ACCESS_TOKEN=YOUR_TOKEN
```

You can paste your access token and Business ID there.

### Adding a new page

Create a new `.tsx` file in the `src/pages` directory

### Adding new features/plugins

You can add other features by having a look at the official [plugins page](https://www.gatsbyjs.org/docs/plugins/)

### Editing the site

```
npm run dev
```

### Building the site

```
npm run build
```

Copy the content of the `public` folder to your webhost or use a website like Netlify which automates that for you.

[gae]: https://developers.facebook.com/tools/explorer/
[atd]: https://developers.facebook.com/tools/debug/accesstoken/

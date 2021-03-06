# Credit Repair Site

A site that allows the user to log into the backend to netlify to post blogs,
and a form that allows the people to fill in, and that's then sent to the
client if it passes the checks for it to be sent

## Using

React
Gatsby.js
Styled-components
Typography.js

## Hosting

Netlify

## TO-DO

- [ ] Calculator
  - [ ] Calculator checking
  - [ ] Form Submissions
  - [ ] Calculator Steps Display
  - [ ] Captcha
- [ ] Contact Form
- [x] Netlify CMS

#### Design

- [ ] Design for Mobile
  - [x] Homepage
  - [ ] Calculator
  - [ ] About, Contact
  - [ ] Articles
- [ ] Design for Ultrawide
  - [ ] Homepage, split in two, but one side has
        the image and content, and the other side just the calculator
  - [ ] Calculator
  - [ ] About, Contact
  - [ ] Articles

#### Testing

- [ ] Jest
- [ ] Unit
- [ ] Intergration
- [ ] Snapshot

#### Documentation

- [ ] Readme for devs
- [ ] Netlify CMS, and Form documentation for user

<div align="center" style="margin-bottom:30px">
    <a href='https://github.com/vagr9k/gatsby-advanced-starter/blob/master/LICENSE'>
    <img src="https://img.shields.io/github/license/vagr9k/gatsby-advanced-starter.svg" alt="Logo" />
    </a>
    <a href='https://github.com/vagr9k/gatsby-advanced-starter'>
    <img src="https://img.shields.io/github/tag/vagr9k/gatsby-advanced-starter.svg" alt="Logo" />
    </a>
        <a href='https://github.com/vagr9k/gatsby-advanced-starter/stargazers'>
    <img src="https://img.shields.io/github/stars/vagr9k/gatsby-advanced-starter.svg" alt="Logo" />
    </a>
        <a href="https://twitter.com/intent/tweet?text=A%20cool%20%40gatsbyjs%20starter%3A&url=https%3A%2F%2Fgithub.com%2FVagr9K%2Fgatsby-advanced-starter">
    <img src="https://img.shields.io/twitter/url/https/github.com/vagr9k/gatsby-advanced-starter.svg?style=social" alt="Logo" />
    </a>
</div>

<div align="center"  style="margin-bottom:30px">
    <img src="static/logos/logo-1024.png" alt="Logo" width='200px' height='200px'/>
</div>

<div align="center">
    <a href="https://codeclimate.com/github/Vagr9K/gatsby-advanced-starter">
      <img src="https://codeclimate.com/github/Vagr9K/gatsby-advanced-starter/badges/gpa.svg" alt="Logo" />
    </a>
    <a href='https://codeclimate.com/github/Vagr9K/gatsby-advanced-starter'>
      <img src="https://codeclimate.com/github/Vagr9K/gatsby-advanced-starter/badges/issue_count.svg" alt="Logo" />
    </a>
    <a href='https://www.codacy.com/app/Vagr9K/gatsby-advanced-starter?utm_source=github.com&utm_medium=referral&utm_content=Vagr9K/gatsby-advanced-starter&utm_campaign=Badge_Grade'>
      <img src="https://api.codacy.com/project/badge/Grade/990fb54ea8094f2aa0ed77f14e859820" alt="Logo" />
    </a>
    <a href='https://github.com/prettier/prettier'>
      <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="Logo" />
    </a>
</div>

# Gatsby Advanced Starter

A starter skeleton with advanced features for [Gatsby](https://github.com/gatsbyjs/gatsby/).

**NOTE**: This branch contains Gatsby v2 compatible version of the starter. To get the Gatsby v1 compatible version, use the [`v1`](https://github.com/Vagr9K/gatsby-advanced-starter/tree/v1) branch.

## Lighthouse Audit Score

<div align="center">
    <a href="https://developers.google.com/web/tools/lighthouse/">
      <img src="docs/pwa-score.png" alt="Lighthouse Score" />
    </a>
</div>

Check out the [Features](#features) to read about all [Progressive Web App](https://developers.google.com/web/progressive-web-apps) capabilities of this starter in detail.

## Why?

This project aims to provide a minimal base for building advanced GatsbyJS powered websites.

It doesn't define any UI limitations in any way and only gives you the basic components for SEO/Social Media/etc while creating a comfortable development environment to get started.

You are free to use any UI framework/styling options.

## How can I use this?

If you are a newcomer to Gatsby who's interested in the implementations of most needed features, this is a great place to start.

If you are interested in a foundation for building ultra-fast websites, you can use this project as a "minimal" starter.

[Demo website.](https://gatsby-advanced-starter-demo.netlify.com)

## Features

- Gatsby v2 support
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Posts in Markdown
  - Code syntax highlighting
  - Embed YouTube videos
  - Embed Tweets
- Pagination
  - Configurable via `SiteConfig.js`
- Tags
  - Separate page for posts under each tag
- Categories
  - Separate page for posts under each category
- [Disqus](https://disqus.com/) support
  - Notifications about new disqus comments
- `/static/` and content folders are available to use with [gatsby-image](https://www.gatsbyjs.org/docs/gatsby-image/) out of the box for optimized image generation
- High configurability
- Separate components for everything:
  - User social profiles
  - Copyright information
  - More!
- [NetlifyCMS](https://www.netlifycms.org) support out of the box
- PWA features
  - Offline support
  - Web App Manifest support
  - Loading progress for slow networks
- SEO
  - [Google Analytics](https://marketingplatform.google.com/about/analytics/) support
  - Sitemap generation
  - robots.txt
  - General description tags
  - [Schema.org JSONLD (Google Rich Snippets)](https://schema.org/)
  - [OpenGraph Tags (Facebook/Google+/Pinterest)](https://ogp.me/)
  - [Twitter Tags (Twitter Cards)](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup)
- RSS feeds
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - LinkedIn share button
  - Telegram share button
- Development tools
  - [ESLint](https://eslint.org/) for linting
  - [Prettier](https://prettier.io/) for code formatting
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - [Netlify](https://www.netlify.com/) deploy configuration
  - [CodeClimate](https://codeclimate.com/) configuration file and badge

NOTE: Feel free to check out [Gatsby Material Starter](https://github.com/Vagr9K/gatsby-material-starter) if you are interested in a more opinionated starter with Material Design in mind.

## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed and updated) by running from your CLI:

```sh
gatsby new YourProjectName https://github.com/Vagr9K/gatsby-advanced-starter
npm run develop # or gatsby develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```sh
git clone https://github.com/Vagr9K/gatsby-advanced-starter YourProjectName # Clone the project
cd YourProjectname
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn install
npm run develop # or gatsby develop
```

## Configuration

Edit the export object in `data/SiteConfig`:

```js
module.exports = {
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://gatsby-advanced-starter-demo.netlify.com", // Domain of your website without pathPrefix.
```

If want to customize Netlify CMS, e.g. registering custom widgets or styling the preview pane, you can do so by editing `src/netlifycms/index.js`:

```js
import CMS from "netlify-cms-app";

CMS.init({
  config: {
    backend: {
      name: "git-gateway"
    }
  }
});
```

You can also optionally set `pathPrefix`:

```js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: "/gatsby-advanced-starter" // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
};
```

WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!

## Pagination

By default the starter will show 4 posts per page. The landing page is the first page located on `/` (controlled by the `Listing` component).

You can control the amount of posts via `SiteConfig` by setting the `postsPerPage: ${NUMBER}`.

NOTE: You can also disable the pagination by setting the `postsPerPage: 0`. In this case the landing page will be controlled by the `Landing` component.

## NetlifyCMS

First of all, make sure to edit `static/admin/config.yml` and add your [GitHub/GitLab/NetlifyId credentials](https://www.netlifycms.org/docs/authentication-backends/):

```yml
backend:
  name: github # Refer to https://www.netlifycms.org/docs/authentication-backends/ for auth backend list and instructions
  branch: master # Branch to update
  repo: vagr9k/gatsby-material-starter # Repo for pushing new commits. Make sure to replace with your repo!
```

You can visit `/admin/` after and will be greeted by a login dialog (depending on the auth provider you ave chosen above).

For NetlifyCMS specific issues visit the [official documentation](https://www.netlifycms.org/docs/intro/).

# Author

Ruben Harutyunyan ([@Vagr9K](https://twitter.com/Vagr9K))

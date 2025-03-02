/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://the-halftimers.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000, // Splits into multiple files if more than 5000 URLs
};

/* eslint-disable */

/* eslint-disable */

const url = require('url');
const path = require('path');
const ghpages = require('gh-pages');
const packageJson = require('./package');
const { CI } = process.env;

/**
 * Extract repo url from package.json, then add auth in it
 */
const getRepositoryName = () => {
  const repoUrl = packageJson.repository.url;
  const parsedRepoURL = url.parse(repoUrl);
  return path.basename(parsedRepoURL.pathname);
}

// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  assetPrefix: CI ? '/{getRepositoryName()}' : '',
  /* config options here */
})

const path = require('path');
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  webpack: config => {
    // NOTE: This is only set up for this example, so that we don't duplicate packages
    // and use urql from this repository. In an actual app, you won't need this
    config.resolve.alias.react = path.resolve(__dirname, './node_modules/react/');
    config.resolve.alias['react-dom'] = path.resolve(__dirname, './node_modules/react-dom/');
    config.resolve.alias['react-is'] = path.resolve(__dirname, './node_modules/react-is/');
    config.resolve.alias.urql = path.resolve(__dirname, '../../');
    return config
  }
})

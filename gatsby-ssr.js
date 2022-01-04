// purpose: server-side rendering
// follows closely documentation: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/

// copied from gatsby-browser.js:
const React = require('react');
const Layout = require('./src/components/Layout').default

exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
    // element is the page that gets wrapped in Layout component
    // {...props} spreads out all the props we might want to use
}
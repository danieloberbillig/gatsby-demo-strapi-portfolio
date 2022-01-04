// purpose: to wrap every page programmatically in Layout.js component
// no page imports the Layout.js component manually 
// follows the documentation here: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/

const React = require('react');
const Layout = require('./src/components/Layout').default

exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
    // element is the page that gets wrapped in Layout component
    // {...props} spreads out all the props we might want to use
}
# DevLog of gatsby-demo-strapi-portfolio

## General
- use gatbsy-browser.js: allows to wrap all pages programmatically in a layout component (layout.js)
    - no page imports manually the layout component 
- uses gatsby-ssr.js for server side rendering: content is just copy from gatsby-browser.js
- have list items (like navigation links (about, contact, projects,...) in a data file in src/constants/links.js), so it can be reused in header, footer, main....

## Iterate over data using [...].map((items)=>{return ...})
- have data in constant file
```
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
```
- then import in component
```
{pageLinks.map((link) => {
          return <Link key={link.id} to={link.url} />
        })}
```
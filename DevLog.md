# DevLog of gatsby-demo-strapi-portfolio

## General

- change VS Code bottom row "JavaScript" to "JavaScript React" to enable autocomplete
- use gatbsy-browser.js: allows to wrap all pages programmatically in a layout component (layout.js)
  - no page imports manually the layout component
- uses gatsby-ssr.js for server side rendering: content is just copy from gatsby-browser.js
- have list items (like navigation links (about, contact, projects,...) in a data file in src/constants/links.js), so it can be reused in header, footer, main....

## SVG import vs StaticImage

- For SVG you should use StaticImage, but need width to control height. can also import directly <img src={heroImg}>


## Destructure properties and create as constants

service is an object with three properties
```
const {id, icon, title} = service
```

## Iterate over data using [...].map((items)=>{return ...})

- have data in constant file in path src/constants/ eg. /links.js eg, all navigation links like home, about, projects,...

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


## Strapi headless CMS
- most popular open source headless cms
- Warning: Strapi headless CMS might not work with node v16...could cause error
- need to be installed locally with npx
```
npx create-strapi-app@latest gatsby-demo-strapi-portfolio-backend --quickstart
```
- is running as a local server / seperate codebase / terminal
- --quickstart starts server in same terminal and opens browser to configure Admin first
- can also run in Visual Studio Code with     npm run develop
- Strapi local server has to run while we develop Gatsby Front-End (its the backend!)
- visit http://localhost:1337/admin/

### Create content STRUCTURE
Click on...
1. Click Content-Types Builder
2. Click Create new collection type
3. Create type "Job" add text fields for company, position, date
4. We want the content creator to create multiple bullet points for each job (repeating element) = needs component; Click Create new component (to create list of bullet point content) -> re-use in type (repeating content)
5. name component "job_dscription" select category (create new) "Description"
6. Go back to "Job" type and add another field
7. Click "Component" -> click Existing one -> Click repeatable;
name it "desc" and choose component "job_description"

### Create content
- go to Content Manager 
- Click on Collection Types: job
- Click Create an entry
- Save and publish
- First TIME: output restricted
    - go to Settings
    - click on Roles
    - click Public and set what they can do/see
    - mark 'find' and 'findone' 
    - its like REST API setup 
- can access content as JSON through content type url parameter
    http://localhost:1337/api/jobs
    Ensure you can see the JSON data!

### Use gatsby-source-strapi plugin
- install
    npm install gatsby-source-strapi@latest
- use collectionTypes (not contentTypes like in old version)
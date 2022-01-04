# Gatsby-Strapi Portfolio Starter

## General
- based on Gatsby-Strapi Portfolio Starter https://github.com/john-smilga/starter-project-gatsby-v3-strapi-portfolio
- Udemy tutorial: https://servian.udemy.com/course/gatsby-tutorial-and-projects-course/learn/lecture/25932158#notes
- Contains personal notes and customisation
- created 04/01/2022


# Original Readme from tutorial

## Setup Notes

1. Used Hello World Starter (all packages included)
2. All components ready to go (including imports)
3. main.css - all styles ready to go
4. No font plugin
5. React-icons
6. Limit amount of components - better overview
7. Use constants to avoid repetition
8. Favicon in Static
9. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        
        // Older Plugin Version 0.0.12 (used in the starter)
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        // New Plugin Version 1+ (npm install gatsby-source-strapi@latest)
        // collectionTypes: [`jobs`, `projects`, `blogs`, ],

        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```

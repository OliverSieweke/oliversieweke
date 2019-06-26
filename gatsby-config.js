/* eslint-env node */

module.exports = {
    siteMetadata: {
        title: "Oliver Sieweke - Personal Website",
        author: "Oliver Sieweke",
        siteUrl: "https://www.oliversieweke.com",
        description: "The personal website of Oliver Sieweke. Includes programming notes and projects.",
        lang: "en",
        creationYear: "2019",
        keywords: ["Oliver Sieweke", "JavaScript", "Programming", "Developer", "Web", "Projects"],
        license: "https://creativecommons.org/licenses/by-nc/4.0/",
        copyrightYear: new Date().getFullYear() === 2019 ? "2019" : `2019 - ${new Date().getFullYear()}`,
        navigationItems: [
            {
                name: "About",
                link: "/",
            },
            {
                name: "JavaScript",
                link: "/javascript",
            },
            {
                name: "Projects",
                link: "/projects",
            },
            {
                name: "Reading",
                link: "/reading",
            },
            {
                name: "Contact",
                link: "/contact",
            },
        ],
        footerLinks: [
            {
                name: "github",
                link: "https://github.com/OliverSieweke/",
            },
            {
                name: "stackoverflow",
                link: "https://stackoverflow.com/users/10367549/oliver-sieweke?tab=profile",
            },
            {
                name: "linkedin",
                link: "https://www.linkedin.com/in/oliver-sieweke",
            },
        ],
    },
    plugins: [
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        // PWA Manifest:
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Oliver Sieweke",
                short_name: "OS",                   /* eslint-disable-line camelcase */
                description: "Personal website including programming notes and projects.",
                categories: ["programming", "education", "books"],
                start_url: "/",                     /* eslint-disable-line camelcase */
                lang: "en",
                background_color: "#FFFFFF",        /* eslint-disable-line camelcase */
                theme_color: "#EC7C3F",             /* eslint-disable-line camelcase */
                icon: "src/images/favicon.png",
                display: "minimal-ui",
                orientation: "any",
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        // Typography:
        {
            resolve: "gatsby-plugin-typography",
            options: { pathToConfigModule: "src/utils/typography" },
        },
        // Footer Links:
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "footerLinkImages",
                path: `${__dirname}/src/images/footer-links`,
            },
        },
        // Common Project Icons
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "commonProjectIcons",
                path: `${__dirname}/src/images/projects/common-icons`,
            },
        },
        // Technology Icons
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "projectTechnologyIcons",
                path: `${__dirname}/src/images/projects/technology-icons`,
            },
        },
        // Project Images
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "projectImages",
                path: `${__dirname}/src/images/projects`,
            },
        },
        // JavaScript Notes
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "JavaScriptNote",
                path: `${__dirname}/content/javascript/`,
            },
        },
        // Projects:
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "Project",
                path: `${__dirname}/content/projects`,
            },
        },
        {
            resolve: "gatsby-transformer-json",
            options: { typeName: "JsonData" },
        },
        // Markdown Files:
        "gatsby-transformer-remark",
        // Offline Support (needs to come after the web-manifest plugin):
        "gatsby-plugin-offline",
        // SEO:
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-robots-txt",
        "gatsby-plugin-netlify",
    ],
};

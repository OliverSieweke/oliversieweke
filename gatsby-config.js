/* eslint-env node */

module.exports = {
    siteMetadata: {
        name: "Oliver Sieweke's Personal Website",
        title: "Oliver Sieweke | Personal Website",
        author: "Oliver Sieweke",
        siteUrl: "https://www.oliversieweke.com",
        description: "The personal website of Oliver Sieweke. Includes programming notes and projects.",
        inLanguage: "en",
        dateCreated: "2019",
        datePublished: "2019",
        keywords: ["Oliver Sieweke", "JavaScript", "Programming", "Developer", "Web", "Projects"],
        license: "https://creativecommons.org/licenses/by-nc/4.0/",
        copyrightYear: new Date().getFullYear() === 2019 ? "2019" : `2019 - ${new Date().getFullYear()}`,
        navigationItems: [
            {
                name: "Oliver Sieweke's Profile",
                title: "About | Oliver Sieweke",
                link: "/",
                linkText: "About",
                description: "This page gives information about Oliver Sieweke.",
                keywords: ["Oliver Sieweke", "About", "Profile", "JavaScript", "Programming", "Developer", "Web", "Projects"],
            },
            {
                name: "Oliver Sieweke's JavaScript Notes",
                title: "JavaScript | Oliver Sieweke",
                link: "/javascript/",
                linkText: "JavaScript",
                description: "This page contains Oliver Sieweke's JavaScript Notes.",
                keywords: ["JavaScript", "Notes", "Programming"],
            },
            {
                name: "Oliver Sieweke's Projects",
                title: "Projects | Oliver Sieweke",
                link: "/projects/",
                linkText: "Projects",
                description: "This page lists all of Oliver Sieweke's personal projects.",
                keywords: ["Oliver Sieweke", "Projects", "Applications"],
            },
            {
                name: "Oliver Sieweke's Book Reviews",
                title: "Reading | Oliver Sieweke",
                link: "/reading/",
                linkText: "Reading",
                description: "This page lists some short book reviews by Oliver Sieweke.",
                keywords: ["Oliver Sieweke", "Reading", "Books", "Review"],
            },
            {
                name: "Oliver Sieweke's Contact Details",
                title: "Contact | Oliver Sieweke",
                link: "/contact/",
                linkText: "Contact",
                description: "This page gives information for contacting Oliver Sieweke.",
                keywords: ["Oliver Sieweke", "Contact"],
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
                name: "footerLinkIcons",
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
                name: "technologyIcons",
                path: `${__dirname}/src/images/projects/technology-icons`,
            },
        },
        // Book Covers:
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "BookCovers",
                path: `${__dirname}/src/images/reading/book-covers`,
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
        // Reading:
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "Reading",
                path: `${__dirname}/content/reading`,
            },
        },
        {
            resolve: "gatsby-transformer-json",
            options: { typeName: "JsonData" },
        },
        // Images:

        // Markdown Files:
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            quality: 100,
                            linkImagesToOriginal: false,
                            tracedSVG: true,
                        },
                    },
                ],
            },
        },
        "gatsby-plugin-sharp",

        "gatsby-plugin-catch-links",
        // Offline Support (needs to come after the web-manifest plugin):
        "gatsby-plugin-offline",
        // SEO:
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-robots-txt",
        "gatsby-plugin-netlify",
        // Images:
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "Images",
                path: `${__dirname}/src/images`,
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
    ],
};

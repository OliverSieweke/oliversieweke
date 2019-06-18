/* eslint-env node */

module.exports = {
    siteMetadata: {
        title: "Oliver Sieweke",
        description: "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
        author: "@gatsbyjs",
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
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",              /* eslint-disable-line camelcase */
                start_url: "/",                     /* eslint-disable-line camelcase */
                background_color: "#663399",        /* eslint-disable-line camelcase */
                theme_color: "#663399",             /* eslint-disable-line camelcase */
                display: "minimal-ui",
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
    ],
};

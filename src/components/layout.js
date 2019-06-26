import React                       from "react";
import { graphql, useStaticQuery } from "gatsby";

import { GlobalSEO }               from "./global-seo.js";
import Header                      from "./header.js";
import Footer                      from "./footer.js";

const Layout = ({ children }) => {
    const { site: { siteMetadata: { navigationItems, footerLinks } }, footerLinkImages } = useStaticQuery(graphql`
        query SiteMetadataQuery {
            site {
                siteMetadata {
                    navigationItems {
                        name
                        link
                    }
                    footerLinks {
                        name
                        link
                    }
                }
            }
            footerLinkImages: allFile(filter: { sourceInstanceName: { eq: "footerLinkImages" } }) {
                edges {
                    node {
                        name
                        publicURL
                    }
                }
            }
        }
    `);

    // noinspection JSUnresolvedVariable
    return (
        <React.Fragment>
            <GlobalSEO />
            <Header {...{ navigationItems }} />
            <main>{children}</main>
            <Footer {...{ footerLinks, footerLinkImages: footerLinkImages.edges.map(({ node }) => node) }} />
        </React.Fragment>
    );
};

export default Layout;

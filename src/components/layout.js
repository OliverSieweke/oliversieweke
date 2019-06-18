import React                       from "react";
import { graphql, useStaticQuery } from "gatsby";
import Header                      from "./header.js";

const Layout = ({ children }) => {
    const { site: { siteMetadata: { navigationItems }}} = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    navigationItems {
                        name
                        link
                    }
                }
            }
        }
    `);

    return (
        <React.Fragment>
            <Header {...{ navigationItems }} />
            <div
                style={{
                    margin: "0 auto",
                    maxWidth: 960,
                    padding: "0px 1.0875rem 1.45rem",
                    paddingTop: 0,
                }}
            >
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()}, Built with
                    {" "}
                    <a href="https://www.gatsbyjs.org" title="gatsby">Gatsby</a>
                </footer>
            </div>
        </React.Fragment>
    );
};

export default Layout;

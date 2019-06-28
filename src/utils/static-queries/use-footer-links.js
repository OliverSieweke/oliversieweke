import { graphql, useStaticQuery } from "gatsby";

export const useFooterLinks = () => {
    const { site: { siteMetadata: { footerLinks } }, footerLinkIcons } = useStaticQuery(graphql`
        query FooterLinksQuery {
            site {
                siteMetadata {
                    footerLinks {
                        name
                        link
                    }
                }
            }
            footerLinkIcons: allFile(filter: { sourceInstanceName: { eq: "footerLinkIcons" } }) {
                edges {
                    node {
                        name
                        publicURL
                    }
                }
            }
        }
    `);

    return footerLinks.map(footerLink => {
        const icon = footerLinkIcons.edges.find(({ node }) => node.name === footerLink.name);

        return {
            ...footerLink,
            iconURL: icon.node.publicURL,
        };
    });

};

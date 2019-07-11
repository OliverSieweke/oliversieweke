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
            footerLinkIcons: allFile(filter: { sourceInstanceName: { eq: "FooterLinkIcons" } }) {
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
        // noinspection JSUnresolvedVariable
        const icon = footerLinkIcons.edges.find(({ node }) => node.name === footerLink.name);

        // noinspection JSUnresolvedVariable
        return {
            ...footerLink,
            iconURL: icon.node.publicURL,
        };
    });
};

import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetaData = () => {
    const { site: { dateModified, siteMetadata } } = useStaticQuery(graphql`
        query SiteMetadataQuery {
            site {
                dateModified: buildTime(formatString: "YYYY-MM-DD")
                siteMetadata {
                    title
                    url: siteUrl
                    description
                    inLanguage
                    dateCreated
                    datePublished
                    license
                    copyrightYear
                    keywords
                    navigationItems {
                        name
                        title
                        link
                        linkText
                        description
                        keywords
                    }
                    footerLinks {
                        name
                        link
                    }
                }
            }
        }
    `);

    return { ...siteMetadata, dateModified };
};

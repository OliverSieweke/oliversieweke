import { graphql, useStaticQuery } from "gatsby";


export const useReadingData = () => {
    const { reading, covers } = useStaticQuery(graphql`
        query ReadingDataQuery {
            reading: allFile(filter: { sourceInstanceName: { eq: "Reading" } }) {
                edges {
                    node {
                        childJsonData {
                            identifier
                            name
                            subtitle
                            author {
                                name
                                sameAs
                            }
                            datePublished
                            url
                            isbn
                            yearRead
                            reviewDateCreated
                            reviewDatePublished
                            review
                        }
                    }
                }
            }
            covers: allFile(filter: { sourceInstanceName: { eq: "BookCovers" } }) {
                edges {
                    node {
                        name
                        publicURL
                        childImageSharp {
                            fixed(height: 120) {
                                height
                                width
                                src
                                srcSet
                                tracedSVG
                            }
                        }
                    }
                }
            }
        }
    `);

    // noinspection JSUnresolvedVariable
    return reading.edges.map(({ node: { childJsonData } }) => {
        // noinspection JSUnresolvedVariable
        const cover = covers.edges.find(({ node }) => node.name === childJsonData.identifier);

        return {
            ...childJsonData,
            cover: cover.node,
        };
    });
};

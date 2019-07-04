import { graphql, useStaticQuery } from "gatsby";

export const useReadingData = () => {
    const { reading, covers } = useStaticQuery(graphql`
        query ReadingDataQuery {
            reading: allFile(filter: { sourceInstanceName: {eq: "Reading"} }) {
                ...readingDataFragment
            }
            covers: allFile(filter: { sourceInstanceName: { eq: "BookCovers" } }) {
                edges {
                    node {
                        name
                        publicURL
                        childImageSharp {
                            fixed(height: 120) {
                                ...GatsbyImageSharpFixed_tracedSVG
                            }
                        }
                    }
                }
            }
        }

        fragment readingDataFragment on FileConnection {
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
    `);

    return reading.edges.map(({ node: { childJsonData } }) => {
        const cover = covers.edges.find(({ node }) => node.name === childJsonData.identifier);

        return {
            ...childJsonData,
            cover: cover.node,
        };
    });
};

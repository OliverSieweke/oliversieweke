import { graphql, useStaticQuery } from "gatsby";

export const useTechnologyIcons = () => {
    const { allFile: { edges: iconEdges } } = useStaticQuery(graphql`
        query TechnologyIconsQuery {
            allFile(filter: { sourceInstanceName: { eq: "technologyIcons" } }) {
                edges {
                    node {
                        name
                        publicURL
                    }
                }
            }
        }
    `);

    return iconEdges.map(({ node }) => node);
};

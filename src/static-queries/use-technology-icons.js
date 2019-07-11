import { graphql, useStaticQuery } from "gatsby";


export const useTechnologyIcons = () => {
    const { technologyIcons: { edges: iconEdges } } = useStaticQuery(graphql`
        query TechnologyIconsQuery {
            technologyIcons: allFile(filter: { sourceInstanceName: { eq: "TechnologyIcons" } }) {
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

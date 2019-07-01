import { graphql, useStaticQuery } from "gatsby";

export const useCommonProjectIcons = () => {
    const { allFile: { edges: iconEdges } } = useStaticQuery(graphql`
        query CommonProjectIconsQuery {
            allFile(filter: { sourceInstanceName: { eq: "CommonProjectIcons" } }) {
                edges {
                    node {
                        name
                        publicURL
                    }
                }
            }
        }
    `);

    const icons = iconEdges.map(({ node }) => node);

    const { publicURL: githubIconURL } = icons.find(({ name }) => name === "github");
    const { publicURL: linkIconURL } = icons.find(({ name }) => name === "link");

    return { githubIconURL, linkIconURL };
};

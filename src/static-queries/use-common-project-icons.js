import { graphql, useStaticQuery } from "gatsby";


export const useCommonProjectIcons = () => {
    const { commonProjectIcons: { edges } } = useStaticQuery(graphql`
        query CommonProjectIconsQuery {
            commonProjectIcons: allFile(filter: { sourceInstanceName: { eq: "CommonProjectIcons" } }) {
                edges {
                    node {
                        name
                        publicURL
                    }
                }
            }
        }
    `);

    const icons = edges.map(({ node }) => node);

    const { publicURL: githubIconURL } = icons.find(({ name }) => name === "github");
    const { publicURL: linkIconURL } = icons.find(({ name }) => name === "link");

    return { githubIconURL, linkIconURL };
};

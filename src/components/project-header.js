import React                       from "react";
import { graphql, useStaticQuery } from "gatsby";

// ===================================================================================================================\\

export const ProjectHeader = ({ logo, projectHeader }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    // Logo:
    const { edges: [{ node: { publicURL: logoURL } }] } = logo;

    // Project Infos:
    const { edges: [{ node: { childJsonData } }] } = projectHeader;
    const { name, title, url, github } = childJsonData;

    // Icons:
    const { allFile: { edges: iconEdges } } = useStaticQuery(graphql`
        query commonProjectIconsQuery {
            allFile(filter: { sourceInstanceName: { eq: "commonProjectIcons" } }) {
                ...commonProjectIconFragment
            }
        }`);
    const icons = iconEdges.map(({ node }) => node);

    const { publicURL: githubIconURL } = icons.find(({ name }) => name === "github");
    const { publicURL: linkIconURL } = icons.find(({ name }) => name === "link");

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <header>
            <a title="Website" href={url} target="_blank" rel="noopener noreferrer">
                <img alt="Project Logo" src={logoURL} />
            </a>

            <h1>{name}</h1>
            <h2>{title}</h2>

            {github &&
             <a title="GitHub Repo" href={github} target="_blank" rel="noopener noreferrer">
                 <img alt="GitHub" src={githubIconURL} />
             </a>}
            {url &&
             <a title="Website" href={url} target="_blank" rel="noopener noreferrer">
                 <img alt="Link" src={linkIconURL} />
             </a>
            }
        </header>
    );
};

// QUERY ---------------------------------------------------------------------------------------------------------------
export const query = graphql`
    fragment projectHeaderFragment on FileConnection {
        edges {
            node {
                childJsonData {
                    name
                    title
                    url
                    github
                }
            }
        }
    }

    fragment commonProjectIconFragment on FileConnection {
        edges {
            node {
                name
                publicURL
            }
        }
    }

    fragment projectLogoFragment on FileConnection {
        edges {
            node {
                name
                publicURL
            }
        }
    }
`;

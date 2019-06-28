import React                     from "react";
import { graphql }               from "gatsby";

import { useCommonProjectIcons } from "../../utils/static-queries/use-common-project-icons.js";

// ===================================================================================================================\\

export const ProjectHeader = ({ name, subtitle, url, github, logoURL }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const { githubIconURL, linkIconURL } = useCommonProjectIcons();

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <header>
            <a title="Website" href={url} target="_blank" rel="noopener noreferrer">
                <img alt="Project Logo" src={logoURL} />
            </a>

            <h1>{name}</h1>
            <h2>{subtitle}</h2>

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
    fragment projectLogoFragment on FileConnection {
        edges {
            node {
                name
                publicURL
            }
        }
    }
`;

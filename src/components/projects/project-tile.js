import React    from "react";
import { Link } from "gatsby";

import { useCommonProjectIcons } from "../../utils/static-queries/use-common-project-icons.js";

// ================================================================================================================== \\

export const ProjectTile = ({ name, subtitle, logoURL, description, url, github, path }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const { githubIconURL, linkIconURL } = useCommonProjectIcons();

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <div>
            <img alt={`${name} Logo`} src={logoURL} />
            {github &&
             <a title={`${name} GitHub Repo`} href={github} target="_blank" rel="noopener noreferrer">
                 <img alt="GitHub" src={githubIconURL} />
             </a>}
            {url &&
             <a title={`${name} Website`} href={url} target="_blank" rel="noopener noreferrer">
                 <img alt="Link" src={linkIconURL} />
             </a>
            }

            <p>{description}</p>
            <Link to={path}>
                <h2>{name}</h2>
            </Link>
            <h3>{subtitle}</h3>
        </div>
    );
};

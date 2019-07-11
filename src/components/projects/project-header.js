import React       from "react";
import { graphql } from "gatsby";

import { useCommonProjectIcons } from "../../static-queries/use-common-project-icons.js";

import styles from "./project.module.css";
// ===================================================================================================================\\

export const ProjectHeader = ({ name, subtitle, url, github }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const { githubIconURL, linkIconURL } = useCommonProjectIcons();

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <header className={styles.header}>
            <div>
                <h1 className={styles.name}>{name}</h1>
                <h2 className={styles.subtitle}>{subtitle}</h2>
            </div>
            {(github || url) && <div className={styles.linkImages}>
                {github &&
                 <a title="GitHub Repo" href={github} target="_blank" rel="noopener noreferrer">
                     <img className={styles.linkImage} alt="GitHub" src={githubIconURL}/>
                 </a>}
                {url &&
                 <a title="Website" href={url} target="_blank" rel="noopener noreferrer">
                     <img className={styles.linkImage} alt="Link" src={linkIconURL}/>
                 </a>
                }
            </div>}
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

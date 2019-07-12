import React                     from "react";
// Data ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { useCommonProjectIcons } from "../../static-queries/use-common-project-icons.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles                    from "../../styles/project.module.css";


// ================================================================================================================== \\
// ============================================ PROJECT HEADER COMPONENT ============================================ \\

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
            {(github || url) &&
             <div className={styles.icons}>
                 {github &&
                  <a className={styles.iconLink} title="GitHub Repo" href={github} target="_blank" rel="noopener noreferrer">
                      <img className={styles.icon} alt="GitHub" src={githubIconURL}/>
                  </a>}
                 {url &&
                  <a className={styles.iconLink} title="Website" href={url} target="_blank" rel="noopener noreferrer">
                      <img className={styles.icon} alt="Link" src={linkIconURL}/>
                  </a>
                 }
             </div>}
        </header>
    );
};

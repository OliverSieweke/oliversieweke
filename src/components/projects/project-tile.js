import React    from "react";
import { Link } from "gatsby";
import Img               from "gatsby-image";

import { useCommonProjectIcons } from "../../utils/static-queries/use-common-project-icons.js";

import styles from "../../pages/projects.module.css";

// ================================================================================================================== \\

export const ProjectTile = ({ name, subtitle, description, image, logoURL, url, github, path }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const { githubIconURL, linkIconURL } = useCommonProjectIcons();

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <div className={styles.projectContainer}>
            <div className={styles.iconBar}>
                <Link to={path}>
                    <img className={styles.iconImage} alt={`${name} Logo`} src={logoURL}/>
                </Link>
                <div className={styles.iconLinks}>
                    {github &&
                     <a className={styles.iconLink}
                        title={`${name} GitHub Repo`}
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer">
                         <img className={styles.iconImage} alt="GitHub" src={githubIconURL}/>
                     </a>}
                    {url &&
                     <a className={styles.iconLink}
                        title={`${name} Website`}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer">
                         <img className={styles.iconImage} alt="Link" src={linkIconURL}/>
                     </a>
                    }
                </div>
            </div>

            <div className={styles.projectMiddle}>
                <Img
                    className={styles.image}
                    fluid={image.fluid}
                />
                <Link className={styles.descriptionLink} to={path}>
                    <div className={styles.descriptionContainer}>
                        <p className={styles.description}>{description}</p>
                    </div>
                </Link>
            </div>
            <Link className={styles.title} to={path}>
                <h1 className={styles.name}>{name}</h1>
                <h1 className={styles.subtitle}>{subtitle}</h1>
            </Link>
        </div>
    );
};

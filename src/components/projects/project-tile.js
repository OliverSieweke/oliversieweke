import React                     from "react";
import { Link }                  from "gatsby";
import Img                       from "gatsby-image";
// Data ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { useCommonProjectIcons } from "../../static-queries/use-common-project-icons.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles                    from "../../styles/projects.module.css";

// ================================================================================================================== \\
// ============================================= PROJECT TILE COMPONENT ============================================= \\

export const ProjectTile = ({ name, subtitle, description, image, logoURL, url, github, path }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const { githubIconURL, linkIconURL } = useCommonProjectIcons();

// RENDER --------------------------------------------------------------------------------------------------------------
    // noinspection JSUnresolvedVariable
    return (
        <section className={styles.projectContainer}>
            <div className={styles.iconBar}>
                <Link to={path}>
                    <img className={styles.icon} alt={`${name} Logo`} src={logoURL}/>
                </Link>
                {
                    (github || url) &&
                    <div className={styles.icons}>
                        {
                            github &&
                            <a className={styles.iconLink}
                               title={`${name} GitHub Repo`}
                               href={github}
                               target="_blank"
                               rel="noopener noreferrer">
                                <img className={styles.icon} alt="GitHub" src={githubIconURL}/>
                            </a>}
                        {
                            url &&
                            <a className={styles.iconLink}
                               title={`${name} Website`}
                               href={url}
                               target="_blank"
                               rel="noopener noreferrer">
                                <img className={styles.icon} alt="Link" src={linkIconURL}/>
                            </a>
                        }
                    </div>
                }
            </div>

            <div className={styles.projectMiddle}>
                <Img
                    className={styles.image}
                    fluid={image.childImageSharp.fluid}
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
        </section>
    );
};

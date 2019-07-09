import React from "react";

import styles from "./project.module.css";
// ===================================================================================================================\\

export const ProjectTechnologySection = ({ sectionName, technologiesList }) => (
    <section className={styles.technologySection}>
        <h4 className={styles.sectionName}>{sectionName}</h4>
        <ul className={styles.technologyList}>
            {technologiesList.map(({ name, url, iconURL }) => (
                <li className={styles.technologyItem} key={name}>
                    <a className={styles.technologyLink} title={name} href={url} target="_blank" rel="noopener noreferrer">
                        <img className={styles.technologyIcon} alt={`${name} Logo`} src={iconURL} />
                        <span>{name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </section>
);

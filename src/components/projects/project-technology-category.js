import React  from "react";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles from "../../styles/project.module.css";


// ================================================================================================================== \\
// ===================================== PROJECT TECHNOLOGY CATEGORY COMPONENT ====================================== \\

export const ProjectTechnologyCategory = ({ categoryName, categoryTechnologies }) => (
    <section className={styles.technologyCategory}>
        <h4 className={styles.categoryName}>{categoryName}</h4>
        <ul className={styles.categoryTechnologies}>
            {categoryTechnologies.map(({ name, url, iconURL }) => (
                <li className={styles.technologyItem} key={name}>
                    <a className={styles.technologyLink}
                       title={name}
                       href={url}
                       target="_blank"
                       rel="noopener noreferrer">
                        <img className={styles.technologyIcon} alt={`${name} Logo`} src={iconURL}/>
                        <span>{name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </section>
);

import React                              from "react";
import { ProjectTechnologyCategory }      from "./project-technology-category.js";
// Data ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { useTechnologyIcons }             from "../../static-queries/use-technology-icons.js";
import { projectTechnologySectionsOrder } from "../../utils/projects/project-technology-sections-order.js";
import {
    TECHNOLOGY_CATEGORY_FIELD_TO_NAME_MAP, TECHNOLOGY_NAME_TO_URL_AND_ICON_MAP,
}                                         from "../../utils/projects/technology-section-names-and-icons.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles                             from "../../styles/project.module.css";


// ================================================================================================================== \\
// ========================================= PROJECT TECHNOLOGIES COMPONENT ========================================= \\

export const ProjectTechnologies = ({ technologies }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const icons = useTechnologyIcons();

    const technologyCategories = Object.entries(technologies)
                                       .filter(([, categoryTechnologies]) => categoryTechnologies)
                                       .map(([category, categoryTechnologies]) => ({
                                           categoryName: TECHNOLOGY_CATEGORY_FIELD_TO_NAME_MAP.get(category),
                                           categoryTechnologies: categoryTechnologies.map(name => {
                                               const { url, iconName } = TECHNOLOGY_NAME_TO_URL_AND_ICON_MAP.get(name);
                                               // noinspection JSUnresolvedVariable
                                               return {
                                                   name, url,
                                                   iconURL: icons.find(({ name }) => name === iconName).publicURL,
                                               };
                                           }),
                                       }));

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <section className={styles.technologies}>
            {Object.entries(technologyCategories)
                   .sort(projectTechnologySectionsOrder)
                   .map(([, section]) => (
                       <ProjectTechnologyCategory
                           key={section.categoryName}
                           {...section}
                       />
                   ))
            }
        </section>
    );
};

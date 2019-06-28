import React from "react";

import { ProjectTechnologySection } from "./project-technology-section.js";

import { useTechnologyIcons }             from "../../utils/static-queries/use-technology-icons.js";
import { projectTechnologySectionsOrder } from "../../utils/projects/project-technology-sections-order.js";
import { TECHNOLOGY_NAME_TO_URL_AND_ICON_MAP, TECHNOLOGY_SECTION_FIELD_TO_NAME_MAP }                                         from "../../utils/projects/technology-section-names-and-icons.js";

// ===================================================================================================================\\

export const ProjectTechnologies = ({ technologies }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const icons = useTechnologyIcons();

    const technologySections = Object.entries(technologies).reduce((accumulator, [section, technologiesList]) => {

        if (technologiesList) {
            accumulator.push({
                sectionName: TECHNOLOGY_SECTION_FIELD_TO_NAME_MAP.get(section),
                technologiesList: technologiesList.map(name => {
                    const { url, iconName } = TECHNOLOGY_NAME_TO_URL_AND_ICON_MAP.get(name);
                    return {
                        name, url,
                        iconURL: icons.find(({ name }) => name === iconName).publicURL,
                    };
                }),
            });
        }

        return accumulator;
    }, []);

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <section>
            {Object.entries(technologySections)
                   .sort(projectTechnologySectionsOrder)
                   .map(([, section]) => <ProjectTechnologySection key={section.sectionName} {...section} />)
            }
        </section>
    );
};

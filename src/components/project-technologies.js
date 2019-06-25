import React                        from "react";
import { graphql, useStaticQuery }  from "gatsby";
import { ProjectTechnologySection } from "./project-technology-section.js";

import { TECHNOLOGY_SECTION_FIELD_TO_NAME_MAP } from "../utils/projects/technology-section-field-to-name-map.js";
import { TECHNOLOGY_NAME_TO_URL_AND_ICON_MAP }  from "../utils/projects/technology-name-to-url-and-icon-map.js";
import { sortProjectTechnologySections }        from "../utils/projects/sort-project-technology-sections.js";

// ===================================================================================================================\\

export const ProjectTechnologies = ({ edges: [{ node: { childJsonData: { technologies } } }] }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    // Technology Icons & URLs:
    const { allFile: { edges: iconEdges } } = useStaticQuery(graphql`
        query TechnologyIconsQuery {
            allFile(filter: { sourceInstanceName: { eq: "projectTechnologyIcons" } }) {
                ...technologyIconFragment
            }
        }`);
    const icons = iconEdges.map(({ node }) => node);

    for (const [section, technologiesList] of Object.entries(technologies)) {
        if (!technologiesList) {
            delete technologies[section];
            continue;
        }

        technologies[section] = {
            sectionName: TECHNOLOGY_SECTION_FIELD_TO_NAME_MAP.get(section),
            technologiesList: technologiesList.map(technology => {
                const { url, iconName } = TECHNOLOGY_NAME_TO_URL_AND_ICON_MAP.get(technology);
                // noinspection JSUnresolvedVariable
                return {
                    name: technology,
                    iconURL: icons.find(({ name }) => name === iconName).publicURL,
                    url,
                };
            }),
        };
    }

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <section>
            {Object.entries(technologies)
                   .sort(sortProjectTechnologySections)
                   .map(([, section]) => <ProjectTechnologySection key={section.sectionName} {...section} />)
            }
        </section>
    );
};

// QUERY ---------------------------------------------------------------------------------------------------------------
export const query = graphql`
    fragment projectTechnologiesFragment on FileConnection {
        edges {
            node {
                childJsonData {
                    technologies {
                        server
                        data
                        hosting
                        frontEnd
                        other
                    }
                }
            }
        }
    }
    fragment technologyIconFragment on FileConnection {
        edges {
            node {
                name
                publicURL
            }
        }
    }
`;

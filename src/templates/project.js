import React       from "react";
import { graphql } from "gatsby";

import { PageSEO }             from "../components/seo/page-seo.js";
import { ProjectSchema }       from "../components/seo/schema-org/project.js";
import { ProjectHeader }       from "../components/projects/project-header.js";
import { Markdown }            from "../components/markdown.js";
import { ProjectTechnologies } from "../components/projects/project-technologies.js";

// ===================================================================================================================\\

export const Project = ({ data, location }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const { logo, projectInfo, mainDescription, technicalDescription } = data;
    const { edges: [{ node: { publicURL: logoURL } }] } = logo;
    const { edges: [{ node: { childJsonData: projectInfoJson } }] } = projectInfo;
    const { technologies } = projectInfoJson;
    const projectMetadata = { ...projectInfoJson, logoURL };
    const { edges: [{ node: { childMarkdownRemark: mainDescriptionMarkdown } }] } = mainDescription;
    const { edges: [{ node: { childMarkdownRemark: technicalDescriptionMarkdown } }] } = technicalDescription;

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO pageMetadata={projectMetadata}
                     Schema={ProjectSchema}
                     location={location}
            />
            <ProjectHeader {...projectMetadata} />

            <section>
                <h3>Main Description</h3>
                <Markdown markdown={mainDescriptionMarkdown} />
            </section>
            <section>
                <h3>Technical Description</h3>
                <Markdown markdown={technicalDescriptionMarkdown} />
            </section>

            <ProjectTechnologies technologies={technologies} />
        </React.Fragment>
    );
};


export default Project;

// QUERY ---------------------------------------------------------------------------------------------------------------
export const query = graphql`
    query ProjectQuery($dirRegex: String!) {
        logo: allFile(filter: {name: {eq: "logo"}, sourceInstanceName: {eq: "Project"}, dir: {regex: $dirRegex}}) {
            ...projectLogoFragment
        }
        projectInfo: allFile(filter: {name: {eq: "project-info"}, dir: {regex: $dirRegex}, sourceInstanceName: {eq: "Project"}}) {
            ...projectDataFragment
        }
        mainDescription: allFile(filter: {name: {eq: "main-description"}, sourceInstanceName: {eq: "Project"}, dir: {regex: $dirRegex}}) {
            ...allMarkdownHtmlFragment
        }
        technicalDescription: allFile(filter: {name: {eq: "technical-description"}, sourceInstanceName: {eq: "Project"}, dir: {regex: $dirRegex} }) {
            ...allMarkdownHtmlFragment
        }
    }
`;

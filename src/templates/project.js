import React       from "react";
import { graphql } from "gatsby";

import { ProjectHeader }       from "../components/project-header.js";
import { Markdown }            from "../components/markdown.js";
import { ProjectTechnologies } from "../components/project-technologies.js";

// ===================================================================================================================\\

// RENDER --------------------------------------------------------------------------------------------------------------
// noinspection JSUnresolvedVariable
const Project = ({ data: { logo, projectHeader, projectTechnologies, mainDescription, technicalDescription } }) => (
    <React.Fragment>
        <ProjectHeader {...{ logo, projectHeader }} />

        <section>
            <h3>Main Description</h3>
            <Markdown edges={mainDescription.edges} />
        </section>
        <section>
            <h3>Technical Description</h3>
            <Markdown edges={technicalDescription.edges} />
        </section>

        <ProjectTechnologies {...projectTechnologies} />
    </React.Fragment>
);


export default Project;

// QUERY ---------------------------------------------------------------------------------------------------------------
export const query = graphql`
    query ProjectQuery($dirRegex: String!) {
        logo: allFile(filter: {name: {eq: "logo"}, sourceInstanceName: {eq: "Project"}, dir: {regex: $dirRegex}}) {
            ...projectLogoFragment
        }
        projectHeader: allFile(filter: {name: {eq: "project-info"}, sourceInstanceName: {eq: "Project"}, dir: {regex: $dirRegex}}) {
            ...projectHeaderFragment
        }
        projectTechnologies: allFile(filter: {name: {eq: "project-info"}, sourceInstanceName: {eq: "Project"}, dir: {regex: $dirRegex}}) {
            ...projectTechnologiesFragment
        }
        mainDescription: allFile(filter: {name: {eq: "main-description"}, sourceInstanceName: {eq: "Project"}, dir: {regex: $dirRegex}}) {
            ...markdownHtmlFragment
        }
        technicalDescription: allFile(filter: {name: {eq: "technical-description"}, sourceInstanceName: {eq: "Project"}, dir: {regex: $dirRegex} }) {
            ...markdownHtmlFragment
        }
    }
`;

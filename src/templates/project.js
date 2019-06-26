import React       from "react";
import { graphql } from "gatsby";

import { ProjectSchema }       from "../components/schema-org/project.js";
import { PageSEO }             from "../components/page-seo.js";
import { ProjectHeader }       from "../components/project-header.js";
import { Markdown }            from "../components/markdown.js";
import { ProjectTechnologies } from "../components/project-technologies.js";

// ===================================================================================================================\\

// RENDER --------------------------------------------------------------------------------------------------------------
// noinspection JSUnresolvedVariable
export const Project = ({ data, location }) => { /* eslint-disable-line no-shadow */
    const { logo, projectHeader, projectTechnologies, mainDescription, technicalDescription, projectMetadata } = data;
    const { edges: [{ node: { childJsonData: metadata } }] } = projectMetadata;
    // noinspection JSUnresolvedVariable
    const pageMetadata = {
        title: `${metadata.name} | ${metadata.title}`,
        url: location.href,
        description: metadata.shortDescription,
        keywords: metadata.keywords,
    };
    const pageSchema = new ProjectSchema(metadata);

    // noinspection JSUnresolvedVariable
    return (
        <React.Fragment>
            <PageSEO {...{ pageMetadata, pageSchema }} />
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
};


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
        projectMetadata: allFile(filter: {name: {eq: "project-info"}, sourceInstanceName: {eq: "Project"}, dir: {regex: $dirRegex}}) {
            ...projectMetadataFragment
        }
    }

    fragment projectMetadataFragment on FileConnection {
        edges {
            node {
                childJsonData {
                    name
                    title
                    schemaType
                    year
                    lang
                    shortDescription
                    url
                    license
                    applicationCategory
                    keywords
                }
            }
        }
    }
`;

import React                   from "react";
import { graphql }             from "gatsby";
import { ProjectHeader }       from "../components/projects/project-header.js";
import { ProjectTechnologies } from "../components/projects/project-technologies.js";
import { Markdown }            from "../components/common/markdown.js";
// SEO •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { PageSEO }             from "../components/seo/page-seo.js";
import { ProjectSchema }       from "../components/seo/schemas/project.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles                  from "../styles/project.module.css";


// ================================================================================================================== \\
// ================================================ PROJECT TEMPLATE ================================================ \\

export default function Project({ data, location }) {
// DATA ----------------------------------------------------------------------------------------------------------------
    const { projectInfo, image, mainDescription, technicalDescription } = data;
    const { childJsonData: projectInfoJson } = projectInfo;
    const { technologies } = projectInfoJson;
    const { childMarkdownRemark: mainDescriptionMarkdown } = mainDescription;
    const { childMarkdownRemark: technicalDescriptionMarkdown } = technicalDescription;

    const metadata = { ...projectInfoJson, image };
    
// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO location={location} Schema={ProjectSchema} metadata={metadata}/>

            <section>
                <ProjectHeader {...projectInfoJson} />
                <hr/>
                <Markdown markdown={mainDescriptionMarkdown}/>
            </section>
            <section className={styles.technicalDescription}>
                <h3>Technical Description</h3>
                <Markdown markdown={technicalDescriptionMarkdown}/>
                <ProjectTechnologies technologies={technologies}/>
            </section>
        </React.Fragment>
    );
}

// QUERY ---------------------------------------------------------------------------------------------------------------
export const query = graphql`
    query ProjectQuery($dirRegex: String!) {
        projectInfo: file(name: { eq: "project-info" }, sourceInstanceName: { eq: "Project" }, dir: { regex: $dirRegex }) {
            ...projectDataFragment
        }
        image: file(name: { eq: "tile-image" }, sourceInstanceName: { eq: "Project" }, dir: { regex: $dirRegex }) {
            publicURL
        }
        mainDescription: file(name: { eq: "main-description" }, sourceInstanceName: { eq: "Project" }, dir: { regex: $dirRegex }) {
            ...markdownHtmlFragment
        }
        technicalDescription: file(name: { eq: "technical-description" }, sourceInstanceName: { eq: "Project" }, dir: { regex: $dirRegex }) {
            ...markdownHtmlFragment
        }
    }
`;

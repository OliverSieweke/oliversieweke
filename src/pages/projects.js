import React               from "react";
import { ProjectTile }     from "../components/projects/project-tile.js";
// Data ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { useProjectsData } from "../utils/static-queries/use-projects-data.js";
import { projectsOrder }   from "../utils/projects/projects-order.js";
// SEO •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { PageSEO }         from "../components/seo/page-seo.js";
import { ProjectsSchema }  from "../components/seo/schemas/projects.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles              from "../styles/projects.module.css";


// ================================================================================================================== \\
// ================================================= PROJECTS PAGE ================================================== \\

export default function Projects({ location }) {
// DATA ----------------------------------------------------------------------------------------------------------------
    const projects = useProjectsData().map(project => ({
        ...project,
        path: `${location.pathname}/${project.identifier}`,
    }));

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO location={location} Schema={ProjectsSchema} metadata={{ projects }}/>

            <h1>Projects</h1>
            <div className={styles.projects}>
                {projects.length ? projects.sort(projectsOrder)
                                           .map(project => (
                                               <ProjectTile
                                                   key={project.identifier}
                                                   {...project}
                                               />
                                           ))
                                 : <p>Sorry, I don&apos;t have any projects to share at the moment.</p>}
            </div>
        </React.Fragment>
    );
}

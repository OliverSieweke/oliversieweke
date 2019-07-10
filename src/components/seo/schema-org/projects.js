import { OliverSiewekeSchema } from "./oliver-sieweke.js";
import { ProjectSchema }       from "./project.js";

export function ProjectsSchema(projectsMetadata) {
    const { name, description, link, inLanguage, dateCreated, datePublished, dateModified } = projectsMetadata;
    const { keywords } = projectsMetadata;
    const { license, copyrightYear } = projectsMetadata;

    const oliverSiewekeSchema = new OliverSiewekeSchema();
    const { projects = [] } = projectsMetadata;
    const hasPart = projects.map(project => new ProjectSchema(project));

    return {
        "@context": "http://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        author: oliverSiewekeSchema,
        url: `https://www.oliversieweke.com${link}`, // Using location.pathname is causing SSR issues.
        inLanguage,
        keywords,
        dateCreated,
        datePublished,
        dateModified,
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        hasPart,
    };
}

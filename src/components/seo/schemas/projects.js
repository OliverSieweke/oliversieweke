import { OliverSiewekeSchema } from "./oliver-sieweke.js";
import { ProjectSchema }       from "./project.js";

export function ProjectsSchema(projectsMetadata) {
    const { name, description, link, inLanguage, dateCreated, datePublished, dateModified } = projectsMetadata;
    const { license, copyrightYear } = projectsMetadata;
    const { keywords } = projectsMetadata;
    const { projects = [] } = projectsMetadata;

    const oliverSiewekeSchema = new OliverSiewekeSchema();

    const hasPart = projects.map(project => new ProjectSchema(project));

    return {
        "@context": "http://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        url: `https://www.oliversieweke.com${link}`, // Workaround - using location.pathname is causing SSR issues.
        inLanguage,
        dateCreated,
        dateModified,
        author: oliverSiewekeSchema,
        datePublished,
        publisher: oliverSiewekeSchema,
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        hasPart,
        keywords,
    };
}

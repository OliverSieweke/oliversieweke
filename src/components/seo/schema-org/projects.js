import { OliverSiewekeSchema } from "./oliver-sieweke.js";
import { ProjectSchema }       from "./project.js";

export const ProjectsSchema = projectsMetadata => {
    const { name, description, url, inLanguage, dateCreated, datePublished, dateModified } = projectsMetadata;
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
        url,
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
};

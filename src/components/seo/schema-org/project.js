import { OliverSiewekeSchema } from "./oliver-sieweke.js";

export const ProjectSchema = projectMetadata => {
    const { name, type, applicationCategory, headline, description, inLanguage, url, dateCreated } = projectMetadata;
    const { keywords, license } = projectMetadata;

    const copyrightYear = new Date().getFullYear() === dateCreated ? `${dateCreated}`
                                                                   : `${dateCreated} - ${new Date().getFullYear()}`;

    const oliverSiewekeSchema = new OliverSiewekeSchema();

    return {
        "@context": "http://schema.org",
        "@type": type,
        applicationCategory,
        author: oliverSiewekeSchema,
        name,
        headline,
        description,
        ...{ url } || {},
        inLanguage,
        keywords,
        dateCreated,
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        operatingSystem: "Windows, OS X, Linux",
    };
};

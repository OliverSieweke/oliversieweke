import { OliverSiewekeSchema } from "./oliver-sieweke.js";

export function ProjectSchema(projectMetadata) {
    const { name, type, applicationCategory, headline, description, inLanguage, url, dateCreated } = projectMetadata;
    const { keywords, license } = projectMetadata;

    const copyrightYear = new Date().getFullYear() === Number(dateCreated) ? `${dateCreated}`
                                                                   : `${dateCreated} - ${new Date().getFullYear()}`;

    const oliverSiewekeSchema = new OliverSiewekeSchema();

    return {
        "@context": "http://schema.org",
        "@type": type,
        applicationCategory,
        name,
        headline,
        description,
        author: oliverSiewekeSchema,
        ...url ? { url } : {},
        inLanguage,
        keywords,
        dateCreated,
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        operatingSystem: "Windows, OS X, Linux",
    };
}

import { OliverSiewekeSchema } from "./oliver-sieweke.js";


export function ProjectSchema(projectMetadata) {
    const { type, name, headline, applicationCategory, description, inLanguage, url, dateCreated } = projectMetadata;
    const { license, keywords } = projectMetadata;

    const currentYear = new Date().getFullYear();
    const copyrightYear = currentYear === dateCreated ? `${dateCreated}`
                                                      : `${dateCreated} - ${currentYear}`;

    const oliverSiewekeSchema = new OliverSiewekeSchema();

    return {
        "@context": "http://schema.org",
        "@type": type,
        name,
        headline,
        applicationCategory,
        description,
        ...url ? { url } : {},
        inLanguage,
        dateCreated,
        author: oliverSiewekeSchema,
        operatingSystem: "Windows, OS X, Linux",
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        keywords,
    };
}

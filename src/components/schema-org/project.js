import { OliverSiewekeSchema } from "./oliver-sieweke.js";

export const ProjectSchema = projectMetadata => {
    const { schemaType: type } = projectMetadata;
    const { name, title: headline, shortDescription: description, url } = projectMetadata;
    const { year: dateCreated, lang: inLanguage } = projectMetadata;
    const { applicationCategory, keywords } = projectMetadata;

    const { year, license } = projectMetadata;
    const copyrightYear = new Date().getFullYear() === year ? `${year}` : `${year} - ${new Date().getFullYear()}`;

    const oliverSiewekeSchema = new OliverSiewekeSchema();

    return {
        "@context": "http://schema.org",
        "@type": type,
        name,
        headline,
        description,
        url,
        dateCreated,
        inLanguage,
        author: oliverSiewekeSchema,
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        applicationCategory,
        keywords,
        operatingSystem: "Windows, OS X, Linux",
    };
};

import { OliverSiewekeSchema } from "./oliver-sieweke.js";

export function WebsiteSchema(siteMetadata) {
    const { name, description, url, inLanguage, dateCreated, datePublished, dateModified } = siteMetadata;
    const { keywords } = siteMetadata;
    const { license, copyrightYear } = siteMetadata;

    const oliverSiewekeSchema = new OliverSiewekeSchema();

    return {
        "@context": "http://schema.org",
        "@type": "WebSite",
        name,
        url,
        description,
        inLanguage,
        dateCreated,
        datePublished,
        dateModified,
        author: oliverSiewekeSchema,
        publisher: oliverSiewekeSchema,
        mainEntity: oliverSiewekeSchema,
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        keywords,
    };
}

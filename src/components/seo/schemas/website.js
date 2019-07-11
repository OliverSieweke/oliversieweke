import { OliverSiewekeSchema } from "./oliver-sieweke.js";


export function WebsiteSchema(siteMetadata) {
    const { name, description, url, image, inLanguage, dateCreated, datePublished, dateModified } = siteMetadata;
    const { license, copyrightYear } = siteMetadata;
    const { keywords } = siteMetadata;

    const oliverSiewekeSchema = new OliverSiewekeSchema();

    return {
        "@context": "http://schema.org",
        "@type": "WebSite",
        name,
        description,
        mainEntity: oliverSiewekeSchema,
        url,
        image,
        inLanguage,
        dateCreated,
        dateModified,
        author: oliverSiewekeSchema,
        datePublished,
        publisher: oliverSiewekeSchema,
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        keywords,
    };
}

import { OliverSiewekeSchema } from "./oliver-sieweke.js";

export const WebsiteSchema = siteMetadata => {
    const { title, siteUrl, description, lang, creationYear, keywords } = siteMetadata;
    const { license, copyrightYear } = siteMetadata;

    const oliverSiewekeSchema = new OliverSiewekeSchema();

    return {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: siteUrl,
        name: title,
        description,
        inLanguage: lang,
        author: oliverSiewekeSchema,
        publisher: oliverSiewekeSchema,
        mainEntity: oliverSiewekeSchema,
        dateCreated: creationYear,
        datePublished: creationYear,
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        keywords,
    };
};

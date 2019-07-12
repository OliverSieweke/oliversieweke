import { OliverSiewekeSchema } from "./oliver-sieweke.js";


export function JavaScriptNoteSchema(projectMetadata) {
    const { name, headline, description, articleSection, wordCount, articleBody, url, inLanguage } = projectMetadata;
    const { dateCreated, dateModified, datePublished } = projectMetadata;
    const { license, keywords } = projectMetadata;

    const copyrightYear = new Date().getFullYear() === dateCreated ? `${dateCreated}`
                                                                   : `${dateCreated} - ${new Date().getFullYear()}`;

    const oliverSiewekeSchema = new OliverSiewekeSchema();

    return {
        "@context": "http://schema.org",
        "@type": "TechArticle",
        name,
        headline,
        description,
        ...articleSection ? { articleSection } : {},
        wordCount,
        articleBody,
        url,
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

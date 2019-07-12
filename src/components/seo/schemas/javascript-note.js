import { OliverSiewekeSchema } from "./oliver-sieweke.js";


export function JavaScriptNoteSchema(noteMetadata) {
    const { name, headline, description, articleSection, wordCount, articleBody, url, inLanguage } = noteMetadata;
    const { dateCreated, dateModified, datePublished } = noteMetadata;
    const { license, keywords } = noteMetadata;

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

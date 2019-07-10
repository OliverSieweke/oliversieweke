import { OliverSiewekeSchema } from "./oliver-sieweke.js";

export function ProgrammingNoteSchema(projectMetadata) {
    const { articleSection, name, description, articleBody, wordCount, url, inLanguage } = projectMetadata;
    const { dateCreated, datePublished, dateModified } = projectMetadata;
    const { keywords, license } = projectMetadata;

    const copyrightYear = new Date().getFullYear() === dateCreated ? `${dateCreated}`
                                                                   : `${dateCreated} - ${new Date().getFullYear()}`;

    const oliverSiewekeSchema = new OliverSiewekeSchema({});

    return {
        "@context": "http://schema.org",
        "@type": "TechArticle",
        ...articleSection ? { articleSection } : {},
        name,
        description,
        author: oliverSiewekeSchema,
        articleBody,
        wordCount,
        url,
        inLanguage,
        keywords,
        dateCreated,
        datePublished,
        dateModified,
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
    };
}

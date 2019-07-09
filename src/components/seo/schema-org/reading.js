import { OliverSiewekeSchema } from "./oliver-sieweke.js";
import { BookReviewSchema }    from "./book-review.js";

export function ReadingSchema(readingMetadata) {
    const { name, description, url, inLanguage, dateCreated, datePublished, dateModified } = readingMetadata;
    const { keywords } = readingMetadata;
    const { license, copyrightYear } = readingMetadata;

    const oliverSiewekeSchema = new OliverSiewekeSchema();
    const { reading = [] } = readingMetadata;
    const hasPart = reading.map(book => new BookReviewSchema(book));

    return {
        "@context": "http://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        author: oliverSiewekeSchema,
        url,
        inLanguage,
        keywords,
        dateCreated,
        datePublished,
        dateModified,
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        hasPart,
    };
}

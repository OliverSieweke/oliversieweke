import { OliverSiewekeSchema } from "./oliver-sieweke.js";
import { BookReviewSchema }    from "./book-review.js";

export function ReadingSchema(readingMetadata) {
    const { name, description, link, inLanguage, dateCreated, datePublished, dateModified } = readingMetadata;
    const { keywords } = readingMetadata;
    const { license, copyrightYear } = readingMetadata;

    const oliverSiewekeSchema = new OliverSiewekeSchema();
    const { reading = [] } = readingMetadata;
    const hasPart = reading.map(book => new BookReviewSchema({
        ...book,
        license,
        reviewURL: `https://www.oliversieweke.com${link}`, // Using location.pathname is causing SSR issues.
    }));

    return {
        "@context": "http://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        author: oliverSiewekeSchema,
        url: `https://www.oliversieweke.com${link}`, // Using location.pathname is causing SSR issues.
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

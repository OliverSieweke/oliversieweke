import { OliverSiewekeSchema } from "./oliver-sieweke.js";
import { BookReviewSchema }    from "./book-review.js";


export function ReadingSchema(readingMetadata) {
    const { name, description, link, inLanguage, dateCreated, datePublished, dateModified } = readingMetadata;
    const { license, copyrightYear } = readingMetadata;
    const { keywords } = readingMetadata;
    const { reading = [] } = readingMetadata;

    const oliverSiewekeSchema = new OliverSiewekeSchema();

    const hasPart = reading.map(book => new BookReviewSchema({
        ...book,
        license,
        reviewURL: `https://www.oliversieweke.com${link}`, // Workaround - using location.pathname is causing SSR issues.
    }));

    return {
        "@context": "http://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        url: `https://www.oliversieweke.com${link}`, // Workaround - using location.pathname is causing SSR issues.
        inLanguage,
        dateCreated,
        dateModified,
        author: oliverSiewekeSchema,
        datePublished,
        publisher: oliverSiewekeSchema,
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        hasPart,
        keywords,
    };
}

import { OliverSiewekeSchema } from "./oliver-sieweke.js";
import { BookSchema }          from "./book.js";

export const BookReviewSchema = bookMetadata => {
    const { name, author, review, reviewURL, reviewDateCreated, reviewDatePublished } = bookMetadata;
    const { reviewLicense } = bookMetadata;

    const copyrightYear = new Date().getFullYear() === reviewDateCreated ?
                          `${reviewDateCreated}` : `${reviewDateCreated} - ${new Date().getFullYear()}`;

    const oliverSiewekeSchema = new OliverSiewekeSchema();

    return {
        "@context": "http://schema.org",
        "@type": "UserReview",
        author: oliverSiewekeSchema,
        itemReviewed: new BookSchema(bookMetadata),
        description: `Oliver Sieweke's review of the book "${name}" by ${author.name}.`,
        reviewBody: review,
        url: reviewURL,
        dateCreated: reviewDateCreated,
        license: reviewLicense,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        datePublished: reviewDatePublished,
        publisher: oliverSiewekeSchema,
    };
};
import { OliverSiewekeSchema } from "./oliver-sieweke.js";
import { BookSchema }          from "./book.js";


export function BookReviewSchema(reviewMetadata) {
    const { name, review, reviewURL, reviewDateCreated, author, reviewDatePublished } = reviewMetadata;
    const { reviewLicense } = reviewMetadata;

    const currentYear = new Date().getFullYear();
    const copyrightYear = currentYear === reviewDateCreated ? `${reviewDateCreated}`
                                                            : `${reviewDateCreated} - ${currentYear}`;

    const oliverSiewekeSchema = new OliverSiewekeSchema();

    return {
        "@context": "http://schema.org",
        "@type": "UserReview",
        itemReviewed: new BookSchema(reviewMetadata),
        description: `Oliver Sieweke's short review of "${name}" by ${author.name}.`,
        reviewBody: review,
        url: reviewURL,
        dateCreated: reviewDateCreated,
        author: oliverSiewekeSchema,
        datePublished: reviewDatePublished,
        publisher: oliverSiewekeSchema,
        license: reviewLicense,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
    };
}

import { AuthorSchema } from "./author.js";

export function BookSchema(bookMetadata) {
    const { name, author, datePublished, url, isbn, cover } = bookMetadata;

    // noinspection JSUnresolvedVariable
    return {
        "@context": "http://schema.org",
        "@type": "Book",
        name,
        datePublished,
        author: new AuthorSchema(author),
        url,
        isbn,
        image: cover.publicURL,
    };
}

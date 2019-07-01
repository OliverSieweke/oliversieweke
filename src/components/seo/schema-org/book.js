import { AuthorSchema } from "./author.js";

export const BookSchema = bookMetadata => {
    const { name, author, datePublished, url, isbn, cover } = bookMetadata;

    return {
        "@context": "http://schema.org",
        "@type": "Book",
        name,
        author: new AuthorSchema(author),
        datePublished,
        url,
        isbn,
        image: cover.publicURL,
    };
};

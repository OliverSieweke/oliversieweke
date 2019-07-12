import { AuthorSchema }    from "./author.js";
import { useSiteMetaData } from "../../../static-queries/use-site-metadata.js";


export function BookSchema(bookMetadata) {
    const { name, author, datePublished, cover, url, isbn } = bookMetadata;
    const { siteUrl } = useSiteMetaData();

    // noinspection JSUnresolvedVariable
    return {
        "@context": "http://schema.org",
        "@type": "Book",
        name,
        datePublished,
        author: new AuthorSchema(author),
        url,
        isbn,
        image: `${siteUrl}${cover.publicURL}`,
    };
}

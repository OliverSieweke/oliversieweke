export function AuthorSchema(authorMetadata) {
    const { name, sameAs } = authorMetadata;

    return {
        "@context": "http://schema.org",
        "@type": "Person",
        name,
        sameAs,
    };
}

import React  from "react";
import Helmet from "react-helmet";

function SchemaOrg({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    isBlogPost,
    organization,
    title,
    url,
}) {
    const baseSchema = [
        {
            "@context": "http://schema.org",
            "@type": "WebSite",
            url,
            name: title,
            author: {
                "@type": "Person",
                name: author.name,
            },

        },
    ];

    const schema = isBlogPost ? [
        ...baseSchema,
        {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    item: {
                        "@id": url,
                        name: title,
                        image,
                    },
                },
            ],
        },
        {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
                "@type": "ImageObject",
                url: image,
            },
            description,
            author: {
                "@type": "Person",
                name: author.name,
            },
            publisher: {
                "@type": "Organization",
                url: organization.url,
                logo: organization.logo,
                name: organization.name,
            },
            mainEntityOfPage: {
                "@type": "WebSite",
                "@id": canonicalUrl,
            },
            datePublished,
        },
    ] :
                   baseSchema;

    return (
        <Helmet>
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
    );


}

export default SchemaOrg;


// const schema = false ? [
//     ...baseSchema,
//     {
//         "@context": "http://schema.org",
//         "@type": "BreadcrumbList",
//         itemListElement: [
//             {
//                 "@type": "ListItem",
//                 position: 1,
//                 item: {
//                     "@id": url,
//                     name: title,
//                     image,
//                 },
//             },
//         ],
//     },
//     {
//         "@context": "http://schema.org",
//         "@type": "BlogPosting",
//         url,
//         name: title,
//         alternateName: defaultTitle,
//         headline: title,
//         image: {
//             "@type": "ImageObject",
//             url: image,
//         },
//         description,
//         author: {
//             "@type": "Person",
//             name: author.name,
//         },
//         publisher: {
//             "@type": "Organization",
//             url: organization.url,
//             logo: organization.logo,
//             name: organization.name,
//         },
//         mainEntityOfPage: {
//             "@type": "WebSite",
//             "@id": canonicalUrl,
//         },
//         datePublished,
//     },
// ] :
//                baseSchema;

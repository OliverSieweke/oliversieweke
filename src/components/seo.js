import React                       from "react";
import Helmet                      from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";


function SEO({ title = "", type = "WebSite", description, url, meta = [], keywords = [] }) {
    const { site: { siteMetadata } } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    lang
                    siteUrl
                    keywords
                    year
                    license
                }
            }
        }
    `);

    // Get default values from configs:
    description = description || siteMetadata.description;  /* eslint-disable-line no-param-reassign */
    url = url || siteMetadata.siteUrl;                      /* eslint-disable-line no-param-reassign */
    keywords = [...siteMetadata.keywords, ...keywords];     /* eslint-disable-line no-param-reassign */

    const OliverSieweke = {
        "@type": "Person",
        name: siteMetadata.author,
        url: siteMetadata.siteUrl,
        alumniOf: [
            "University of Oxford",
            "Sciences Po",
            "Ecole Polytechnique",
            "ENSAE",
        ],
        familyName: "Sieweke",
        givenName: "Oliver",
        birthDate: 1992,
        email: "oliver@sieweke.eu",
        jobTitle: "Web Developer",
        knowsLanguage: ["en", "fr", "de"],
        address: {
            "@type": "PostalAddress",
            addressCountry: "Germany",
            addressLocality: "Berlin",
        },
        sameAs: [
            "https://www.linkedin.com/in/oliver-sieweke/",
            "https://github.com/OliverSieweke/",
            "https://stackoverflow.com/users/10367549/oliver-sieweke",
        ],
        // image?
    };

    const schema = [
        {
            "@context": "http://schema.org",
            "@type": "WebSite",
            url,
            name: siteMetadata.title,
            description: siteMetadata.description,
            author: OliverSieweke,
            publisher: OliverSieweke,
            dateCreated: siteMetadata.year,
            datePublished: siteMetadata.year,
            mainEntity: OliverSieweke,
            copyrightHolder: OliverSieweke,
            copyrightYear: siteMetadata.year,
            keywords: siteMetadata.keywords,
            license: siteMetadata.license,
            // image?
        },
    ];


    return (

        <Helmet
            title={title}
            titleTemplate={title ? `${title} | ${siteMetadata.title}` : siteMetadata.title}
            htmlAttributes={{ lang: siteMetadata.lang }}
            meta={[
                {
                    property: "og:title",
                    content: title,
                },
                {
                    name: "description",
                    content: description,
                },
                {
                    property: "og:description",
                    content: description,
                },
                {
                    property: "og:type",
                    content: type,
                },
                {
                    property: "og:url",
                    content: url,
                },
                {
                    property: "og:site_name",
                    content: title,
                },
                {
                    property: "og:locale",
                    content: siteMetadata.lang,
                },
                {
                    name: "twitter:title",
                    content: title,
                },
                {
                    name: "twitter:card",
                    content: "summary",
                },
                {
                    name: "twitter:creator",
                    content: siteMetadata.author,
                },
                {
                    name: "twitter:description",
                    content: description,
                },
                {
                    name: "keywords",
                    content: keywords.join(", "),
                },
                ...meta,
            ]}
        >
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
            <link rel="preconnect" href="https://i.creativecommons.org" />
        </Helmet>
    );
}

export default SEO;

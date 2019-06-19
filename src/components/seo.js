import React                       from "react";
import Helmet                      from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

function SEO({ title="", type = "website", description, url, meta = [], keywords = [] }) {
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
                }
            }
        }
    `);

    // Get default values from configs:
    description = description || siteMetadata.description;  /* eslint-disable-line no-param-reassign */
    url = url || siteMetadata.siteUrl;                      /* eslint-disable-line no-param-reassign */
    keywords = [...siteMetadata.keywords, ...keywords];     /* eslint-disable-line no-param-reassign */

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
            <link rel="preconnect" href="https://i.creativecommons.org" />
            <link rel="preconnect" href="https://licensebuttons.net" />
        </Helmet>
    );
}

export default SEO;

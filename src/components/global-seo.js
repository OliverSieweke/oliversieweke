import React                       from "react";
import Helmet                      from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import { WebsiteSchema } from "./schema-org/website.js";

export const GlobalSEO = () => {
    const { site: { siteMetadata } } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                    lang
                    creationYear
                    keywords
                    license
                    copyrightYear
                }
            }
        }
    `);

    const { lang, title, keywords } = siteMetadata;
    const websiteSchema = new WebsiteSchema(siteMetadata);

    return (
        <Helmet
            defaultTitle={title}
            htmlAttributes={{ lang }}
            meta={[
                {
                    property: "og:site_name",
                    content: title,
                },
                {
                    property: "og:locale",
                    content: lang,
                },
                {
                    name: "keywords",
                    content: keywords.join(", "),
                },
            ]}
        >
            <script type="application/ld+json">{JSON.stringify([websiteSchema])}</script>
            <link rel="preconnect" href="https://i.creativecommons.org" />
        </Helmet>
    );
};

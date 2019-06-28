import React  from "react";
import Helmet from "react-helmet";

import { useSiteMetaData } from "../../utils/static-queries/use-site-metadata.js";

// ================================================================================================================== \\

export const PageSEO = ({ pageMetadata = {}, Schema, location }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const siteMetadata = useSiteMetaData();
    // Config Metadata:
    const configPageMetadata = siteMetadata.navigationItems.find(({ link }) => link === location.pathname) || {};
    // Default Metadata:
    const defaultPageMetadata = {
        type: "website",
        url: location.href,
    };
    // Page Metadata:
    const metadata = Object.assign(
        siteMetadata,
        defaultPageMetadata,
        configPageMetadata,
        pageMetadata,
        {
            keywords: Array.from(new Set([
                ...siteMetadata.keywords || [],
                ...defaultPageMetadata.keywords || [],
                ...configPageMetadata.keywords || [],
                ...pageMetadata.keywords || [],
            ])),
            meta: Array.from(new Set([
                ...defaultPageMetadata.meta || [],
                ...configPageMetadata.meta || [],
                ...pageMetadata.meta || [],
            ])),
        },
    );
    const { title, url, type, description, keywords, meta } = metadata;
    // Page Schema
    const pageSchema = Schema && new Schema(metadata);

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <Helmet
            title={title}
            meta={[
                {
                    name: "description",
                    content: description,
                },
                {
                    name: "keywords",
                    content: keywords.join(", "),
                },
                // Open Graph ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
                {
                    property: "og:title",
                    content: title,
                },
                {
                    property: "og:url",
                    content: url,
                },
                {
                    property: "og:type",
                    content: type,
                },
                {
                    property: "og:description",
                    content: description,
                },
                // Twitter •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
                {
                    name: "twitter:card",
                    content: "summary",
                },
                {
                    name: "twitter:title",
                    content: title,
                },
                {
                    name: "twitter:description",
                    content: description,
                },
                // Additional ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
                ...meta,
            ]}
            >
            {pageSchema && <script type="application/ld+json">{JSON.stringify([pageSchema])}</script>}
        </Helmet>
    );
};

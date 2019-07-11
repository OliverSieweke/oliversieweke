import React               from "react";
import Helmet              from "react-helmet";
// Queries •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { useSiteMetaData } from "../../static-queries/use-site-metadata.js";


// ================================================================================================================== \\
// ========================================== PAGE SEO COMPONENT ==================================================== \\

export const PageSEO = ({ location, Schema, metadata: pageMetadata = {} }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    // Default Metadata:
    const defaultPageMetadata = {
        type: "website",
        url: location.href,
    };
    // Site Metadata:
    const siteMetadata = useSiteMetaData();
    // Config Metadata:
    const configPageMetadata = siteMetadata.navigationItems.find(({ link }) => link === location.pathname) || {};
    // Page Metadata:
    const metadata = Object.assign(
        siteMetadata,
        defaultPageMetadata,
        configPageMetadata,
        pageMetadata,
        {
            keywords: Array.from(new Set([
                ...defaultPageMetadata.keywords || [],
                ...configPageMetadata.keywords || [],
                ...pageMetadata.keywords || [],
            ])),
            meta: Array.from(new Set([
                ...configPageMetadata.meta || [],
                ...pageMetadata.meta || [],
            ])),
        },
    );
    const { title, url, type, description, keywords, meta, siteUrl, image } = metadata;

    // Page Schema:
    const pageSchema = Schema && new Schema(metadata);

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <Helmet
            title={title}
            meta={[
                // General •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
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
                {
                    property: "og:image",
                    content: image && `${siteUrl}${image}`,
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

import React  from "react";
import Helmet from "react-helmet";

import { useSiteMetaData } from "../../utils/static-queries/use-site-metadata.js";
import { WebsiteSchema }   from "../seo/schema-org/website.js";

// ================================================================================================================== \\

export const GlobalSEO = () => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const siteMetadata = useSiteMetaData();

    const { title, inLanguage: lang, keywords } = siteMetadata;
    const websiteSchema = new WebsiteSchema({ ...siteMetadata });

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <Helmet
            defaultTitle={name}
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
            <link rel="preload" as="image" href="https://i.creativecommons.org/l/by-nc/4.0/80x15.png" />
        </Helmet>
    );
};

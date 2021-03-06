import React               from "react";
import Helmet              from "react-helmet";
// SEO •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { WebsiteSchema }   from "./schemas/website.js";
// Data ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { useSiteMetaData } from "../../static-queries/use-site-metadata.js";
import { useSquareProfileImage } from "../../static-queries/use-square-profile-image.js";


// ================================================================================================================== \\
// ============================================== GLOBAL SEO COMPONENT ============================================== \\

export const GlobalSEO = () => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const siteMetadata = useSiteMetaData();
    const { title, name, inLanguage: lang, keywords, siteUrl } = siteMetadata;
    const { publicURL } = useSquareProfileImage();

    const websiteSchema = new WebsiteSchema({
        ...siteMetadata,
        image: `${siteUrl}${publicURL}`,
    });

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
            <link rel="preconnect" href="https://i.creativecommons.org"/>
            <link rel="preload" as="image" href="https://i.creativecommons.org/l/by-nc/4.0/80x15.png"/>
        </Helmet>
    );
};

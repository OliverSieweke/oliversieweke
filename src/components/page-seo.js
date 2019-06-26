import React  from "react";
import Helmet from "react-helmet";


export const PageSEO = ({ pageMetadata, pageSchema }) => {
    const { title, url, type = "website", description, keywords = [], meta = [] } = pageMetadata;

    return (
        <Helmet
            title={title}
            meta={[
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
                    name: "description",
                    content: description,
                },
                {
                    property: "og:description",
                    content: description,
                },
                {
                    name: "keywords",
                    content: keywords.join(", "),
                },
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
                ...meta,
            ]}
        >
            {pageSchema && <script type="application/ld+json">{JSON.stringify([pageSchema])}</script>}
        </Helmet>
    );
};

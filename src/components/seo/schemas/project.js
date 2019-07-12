import { OliverSiewekeSchema } from "./oliver-sieweke.js";
import { useSiteMetaData }     from "../../../static-queries/use-site-metadata.js";


export function ProjectSchema(projectMetadata) {
    const { type, name, headline, applicationCategory, description, url, inLanguage, dateCreated } = projectMetadata;
    const { license } = projectMetadata;
    const { image, keywords } = projectMetadata;

    const currentYear = new Date().getFullYear();
    const copyrightYear = currentYear === dateCreated ? `${dateCreated}`
                                                      : `${dateCreated} - ${currentYear}`;

    const oliverSiewekeSchema = new OliverSiewekeSchema();
    const { siteUrl } = useSiteMetaData();

    return {
        "@context": "http://schema.org",
        "@type": type,
        name,
        headline,
        applicationCategory,
        description,
        image: `${siteUrl}${image.publicURL}`,
        ...url ? { url } : {},
        inLanguage,
        dateCreated,
        author: oliverSiewekeSchema,
        operatingSystem: "Windows, OS X, Linux",
        license,
        copyrightYear,
        copyrightHolder: oliverSiewekeSchema,
        keywords,
    };
}

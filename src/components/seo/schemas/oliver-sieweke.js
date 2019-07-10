export function OliverSiewekeSchema({ image, siteUrl }) {
    return {
        "@context": "http://schema.org",
        "@type": "Person",
        name: "Oliver Sieweke",
        givenName: "Oliver",
        familyName: "Sieweke",
        birthDate: 1992,
        jobTitle: "Web Developer",
        email: "oliver@sieweke.eu",
        image: `${siteUrl}${image}`,
        url: siteUrl,
        address: {
            "@type": "PostalAddress",
            addressCountry: "Germany",
            addressLocality: "Berlin",
        },
        alumniOf: [
            "University of Oxford",
            "Sciences Po",
            "Ecole Polytechnique",
            "ENSAE",
        ],
        knowsLanguage: ["en", "de", "fr"],
        sameAs: [
            "https://www.linkedin.com/in/oliver-sieweke/",
            "https://github.com/OliverSieweke/",
            "https://stackoverflow.com/users/10367549/oliver-sieweke",
        ],
    };
}

export function OliverSiewekeSchema() {
    return {
        "@context": "http://schema.org",
        "@type": "Person",
        name: "Oliver Sieweke",
        givenName: "Oliver",
        familyName: "Sieweke",
        url: "https://www.oliversieweke.com",
        alumniOf: [
            "University of Oxford",
            "Sciences Po",
            "Ecole Polytechnique",
            "ENSAE",
        ],
        birthDate: 1992,
        email: "oliver@sieweke.eu",
        jobTitle: "Web Developer",
        knowsLanguage: ["en", "de", "fr"],
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
    };
}

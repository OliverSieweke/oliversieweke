const TECHNOLOGY_SECTIONS_ORDER = [
    "server",
    "frontEnd",
    "hosting",
    "other",
    "data",
];

export const projectTechnologySectionsOrder = ([a], [b]) => TECHNOLOGY_SECTIONS_ORDER.indexOf(a)
                                                            - TECHNOLOGY_SECTIONS_ORDER.indexOf(b);

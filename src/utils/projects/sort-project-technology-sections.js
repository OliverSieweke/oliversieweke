const TECHNOLOGY_SECTIONS_ORDER = [
    "server",
    "frontEnd",
    "hosting",
    "other",
    "data",
];

export const sortProjectTechnologySections = ([a], [b]) => TECHNOLOGY_SECTIONS_ORDER.indexOf(a)
                                                           - TECHNOLOGY_SECTIONS_ORDER.indexOf(b);

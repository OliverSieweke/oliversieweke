const TECHNOLOGY_SECTIONS_ORDER = [
    "frameworks",
    "server",
    "data",
    "hosting",
    "frontEnd",
    "libraries",
];

export const projectTechnologySectionsOrder = (a, b) => TECHNOLOGY_SECTIONS_ORDER.indexOf(a.category)
                                                        - TECHNOLOGY_SECTIONS_ORDER.indexOf(b.category);

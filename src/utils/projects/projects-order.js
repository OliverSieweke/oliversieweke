const PROJECTS_ORDER = [
    "octopus",
    "dragoon",
];

export const projectsOrder = (a, b) => PROJECTS_ORDER.indexOf(a.identifier)
                                       - PROJECTS_ORDER.indexOf(b.identifier);

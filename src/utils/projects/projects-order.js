const PROJECTS_ORDER = [
    "dragoon",
    "octopus",
    "memory-box",
    "oliversieweke",
];

export const projectsOrder = (a, b) => PROJECTS_ORDER.indexOf(a.identifier)
                                       - PROJECTS_ORDER.indexOf(b.identifier);

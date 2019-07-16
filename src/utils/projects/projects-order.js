const PROJECTS_ORDER = [
    "dragoon",
    "octopus",
    "dragoonmoon",
    "dragoontoon",
];

export const projectsOrder = (a, b) => PROJECTS_ORDER.indexOf(a.identifier)
                                       - PROJECTS_ORDER.indexOf(b.identifier);

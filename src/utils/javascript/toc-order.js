const TOC_ORDER = [
    "presentation",
    [
        "inheritance",
        [
            "prototype-and-prototype",
            "constructors",
            [
                "inheritance-patterns",
                ["pseudoclassical-inheritance"],
            ],
        ],
    ],
];

export const orderToc = (toc, order = TOC_ORDER) => {
    toc.subNodes.sort(nodesOrder(order));

    for (const node of toc.subNodes) {
        if (node.subNodes.length) {
            orderToc(node, order.find(element => element[0] === node.identifier)[1]);
        }
    }

    return toc;
};

const nodesOrder = order => (a, b) => order.findIndex(isNodeOfIdentifier(a.identifier))
                                      - order.findIndex(isNodeOfIdentifier(b.identifier));

const isNodeOfIdentifier = identifier => element => element === identifier || element[0] === identifier;

const TOC_ORDER = [
    "working-with-properties",
    [
        "test",
        [
            "test-1",
            "test-2",
        ],
    ],
];

export const orderToc = (toc, order = TOC_ORDER) => {
    toc.subNodes.sort(nodesOrder(order));

    for (const node of toc.subNodes) {
        if (node.subNodes.length) {
            orderToc(node, TOC_ORDER.find(element => element[0] === node.identifier)[1]);
        }
    }

    return toc;
};

const nodesOrder = order => (a, b) => order.findIndex(isNodeOfIdentifier(a.identifier))
                                      - order.findIndex(isNodeOfIdentifier(b.identifier));

const isNodeOfIdentifier = identifier => element => element === identifier || element[0] === identifier;

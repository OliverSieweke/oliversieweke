import { graphql, useStaticQuery } from "gatsby";
import { TocNode }                 from "../javascript/toc-node.js";

import { orderToc } from "../javascript/toc-order.js";

export const useJavaScriptNotesToc = () => {
    const { javaScriptNotes: { edges } } = useStaticQuery(graphql`
        query notesTocQuery {
            javaScriptNotes: allFile(filter: {sourceInstanceName: {eq: "JavaScriptNote"}}) {
                ...allMarkdownHtmlFragment
            }
        }
    `);

    const toc = edges.reduce((accumulator, { node }) => {
        const { relativePath } = node;
        const truncatedRelativePath = relativePath.replace(/.md$/u, "");
        const pathArray = truncatedRelativePath.split("/");

        let currentNode = accumulator;

        for (const [index, pathSegment] of pathArray.entries()) {
            currentNode = index === pathArray.length - 1 ? currentNode.addOrComplementNode(node)
                                                         : currentNode.addOrComplementNode({ identifier: pathSegment });
        }

        return accumulator;
    }, new TocNode({
        identifier: "javascript",
        name: "JavaScript",
        slug: "/javascript/",
        subNodes: [
            new TocNode({
                identifier: "presentation",
                name: "Presentation",
                slug: "/javascript/",
            }),
        ],
    }));

    return orderToc(toc);
};

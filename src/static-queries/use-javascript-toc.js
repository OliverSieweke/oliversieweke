import { graphql, useStaticQuery } from "gatsby";
import { TocNode }                 from "../utils/javascript/toc-node.js";
import { orderToc }                from "../utils/javascript/toc-order.js";


const initialToc = new TocNode({
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
});

export const useJavaScriptToc = () => {
    const { javaScriptNotes: { edges } } = useStaticQuery(graphql`
        query notesTocQuery {
            javaScriptNotes: allFile(filter: {sourceInstanceName: {eq: "JavaScriptNote"}}) {
                edges {
                    node {
                        ...markdownHtmlFragment
                    }
                }
            }
        }
    `);

    const toc = edges.reduce((accumulator, { node }) => {
        const { relativePath } = node;
        const truncatedRelativePath = relativePath.replace(/.md$/u, "");
        const pathArray = truncatedRelativePath.split("/");

        let currentNode = accumulator;

        for (const [index, pathSegment] of pathArray.entries()) {
            currentNode = index === pathArray.length - 1 ? currentNode.addOrComplementNode(node) // End of path: add full node
                                                         : currentNode.addOrComplementNode({ identifier: pathSegment }); // Middle of path: add identifier
        }

        return accumulator;
    }, initialToc);

    return orderToc(toc);
};

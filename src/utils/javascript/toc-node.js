export class TocNode {
    constructor({ identifier, name, slug }) {
        Object.assign(this, {
            identifier, name, slug,
            subNodes: [],
        });
    }

    addOrComplementNode(node) { // This can be a mere identifier or a full node
        const { identifier, childMarkdownRemark, fields } = node;
        const name = childMarkdownRemark && childMarkdownRemark.frontmatter && childMarkdownRemark.frontmatter.name;
        const slug = fields && fields.slug;

        if (identifier === "index") { // index files correspond to the directory and the info is directly added to the current node.
            return Object.assign(this, { name, slug });
        } else { // Other files are added as subNodes
            const correspondingSubNode = this.subNodes.find(({ identifier: subNodeIdentifier }) => subNodeIdentifier
                                                                                                   === identifier);
            if (correspondingSubNode) { // Add name and slug info to existing node if available
                return Object.assign(correspondingSubNode, {
                    ...name ? { name } : {},
                    ...slug ? { slug } : {},
                });
            } else { // Create new subNode if it does not exist yet
                const newNode = new TocNode({ identifier, name, slug });
                this.subNodes.push(newNode);
                return newNode;
            }
        }
    }
}

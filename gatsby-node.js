// See: https://www.gatsbyjs.org/docs/node-apis/
/* eslint-env node */

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "pages" });
        createNodeField({
            node,
            name: "slug",
            value: slug,
        });
    }
};


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(`
        query MarkdownSlugs {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
  `).then(({ data: { allMarkdownRemark: { edges } } }) => {
        // noinspection JSUnresolvedVariable
        edges.forEach(({ node: { fields: { slug } } }) => {
            // noinspection JSUnresolvedVariable
            createPage({
                path: slug,
                component: path.resolve("./src/templates/programming-notes.js"),
                context: { slug },
            });
        });
    });
};

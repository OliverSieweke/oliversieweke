// See: https://www.gatsbyjs.org/docs/node-apis/
/* eslint-env node */

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");


// TODO: go through the possible remark config options

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    const isProject = node.sourceInstanceName === "Project" &&
                      node.internal.type === "Directory" &&
                      node.dir.match(/content\/projects\/?$/u); // Exclude root 'projects' folder
    const isJavaScriptNote = node.sourceInstanceName === "JavaScriptNote" &&
                             node.internal.type === "File" &&
                             node.internal.mediaType === "text/markdown";

    if (isProject || isJavaScriptNote) {
        const relativeFilePath = createFilePath({ node, getNode }).replace(/index\/?$/u, "");
        const basePath = isJavaScriptNote ? "javascript" :
                         isProject ? "projects" :
                         "";

        createNodeField({
            node,
            name: "slug",
            value: `/${basePath}${relativeFilePath}`,
        });
    }
};


exports.createPages = ({ graphql, actions }) => Promise.all([
    createProgrammingNotesPages({ graphql, actions }),
    createProjectPages({ graphql, actions }),
]);


function createProgrammingNotesPages({ graphql, actions }) {
    // TODO query
    const { createPage } = actions;

    return graphql(`
        query JavaScriptSlugs {
            allFile(filter: {sourceInstanceName: {eq: "JavaScriptNote"}, dir: {regex: "/content/javascript/?/"}}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
  `).then(({ data: { allFile: { edges } } }) => {
        edges.forEach(({ node: { fields: { slug } } }) => {
            createPage({
                path: slug,
                component: path.resolve("./src/templates/programming-note.js"),
                context: { slug },
            });
        });
    });
}

function createProjectPages({ graphql, actions }) {
    const { createPage } = actions;

    return graphql(`
        query ProjectSlugs {
            allDirectory(filter: {sourceInstanceName: {eq: "Project"}, dir: {regex: "/content/projects/?$/"}}) {
                edges {
                    node {
                        name
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(({ data: { allDirectory: { edges } } }) => {
        edges.forEach(({ node: { name, fields: { slug } } }) => {
            createPage({
                path: slug,
                component: path.resolve("./src/templates/project.js"),
                context: { name, dirRegex: `/${name}/?$/` },
            });
        });
    });

}

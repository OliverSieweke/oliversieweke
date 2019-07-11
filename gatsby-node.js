// See: https://www.gatsbyjs.org/docs/node-apis/
/* eslint-env node */

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// I) Add Slugs --------------------------------------------------------------------------------------------------------
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    // noinspection JSUnresolvedVariable
    const isProject = node.sourceInstanceName === "Project" &&
                      node.internal.type === "Directory" &&
                      node.dir.match(/content\/projects\/?$/u); // Exclude root 'projects' folder
    // noinspection JSUnresolvedVariable
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


// II) Create Pages ----------------------------------------------------------------------------------------------------
exports.createPages = ({ graphql, actions }) => Promise.all([
    createJavascriptNotePages({ graphql, actions }),
    createProjectPages({ graphql, actions }),
]);


function createJavascriptNotePages({ graphql, actions }) {
    const { createPage } = actions;

    return graphql(`
        query JavaScriptSlugs {
            allFile(filter: { sourceInstanceName: { eq: "JavaScriptNote" }, dir: { regex: "/content/javascript/?/" } }) { # dir is provided in the query to exclude the root folder from the results
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
                component: path.resolve("./src/templates/javascript-note.js"),
                context: { slug },
            });
        });
    });
}

function createProjectPages({ graphql, actions }) {
    const { createPage } = actions;

    return graphql(`
        query ProjectSlugs {
            allDirectory(filter: { sourceInstanceName: { eq: "Project" }, dir: { regex: "/content/projects/?$/" } }) { # dir is provided in the query to exclude the root folder from the results
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

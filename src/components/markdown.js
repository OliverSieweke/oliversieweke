import React       from "react";
import { graphql } from "gatsby";

// ===================================================================================================================\\

// RENDER --------------------------------------------------------------------------------------------------------------
export const Markdown = ({ markdown: { html } }) => < div dangerouslySetInnerHTML={{ __html: html }}/>;

// QUERY ---------------------------------------------------------------------------------------------------------------
export const query = graphql`
    fragment allMarkdownHtmlFragment on FileConnection {  # Remove if not needed anymore
        edges {
            node {
                identifier: name
                articleSection: relativeDirectory
                relativePath
                childMarkdownRemark {
                    html
                    frontmatter {
                        name
                        title
                        description
                        keywords
                    }
                    wordCount {
                        wordCount: words
                    }
                    internal {
                        articleBody: content
                    }
                }
                fields {
                    slug
                }
            }
        }
    }
    
    fragment markdownHtmlFragment on File {
        articleSection: relativeDirectory
        childMarkdownRemark {
            html
            frontmatter {
                name
                title
                description
                keywords
            }
            wordCount {
                wordCount: words
            }
            internal {
                articleBody: content
            }
        }
    }
`;

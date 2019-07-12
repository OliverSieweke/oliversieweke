import React       from "react";
import { graphql } from "gatsby";


// ================================================================================================================== \\
// =============================================== MARKDOWN COMPONENT =============================================== \\

// RENDER --------------------------------------------------------------------------------------------------------------
export const Markdown = ({ markdown: { html } }) => < div dangerouslySetInnerHTML={{ __html: html }}/>;

// QUERY ---------------------------------------------------------------------------------------------------------------
export const query = graphql`
    fragment markdownHtmlFragment on File {
        identifier: name
        articleSection: relativeDirectory
        relativePath
        childMarkdownRemark {
            html
            frontmatter {
                name
                title
                headline
                description
                dateCreated
                dateModified
                datePublished
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
`;

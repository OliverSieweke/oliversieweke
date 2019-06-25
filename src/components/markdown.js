import React       from "react";
import { graphql } from "gatsby";

// ===================================================================================================================\\

// RENDER --------------------------------------------------------------------------------------------------------------
export const Markdown = ({ edges: [{ node: { childMarkdownRemark: { html } } }] }) => { /* eslint-disable-line arrow-body-style */
    return < div dangerouslySetInnerHTML={{ __html: html }} />;
};

// QUERY ---------------------------------------------------------------------------------------------------------------
export const query = graphql`
    fragment markdownHtmlFragment on FileConnection {
        edges {
            node {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;

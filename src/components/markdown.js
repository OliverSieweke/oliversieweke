import React       from "react";
import { graphql } from "gatsby";

// ===================================================================================================================\\

// RENDER --------------------------------------------------------------------------------------------------------------
export const Markdown = ({ markdown: { html } }) => < div dangerouslySetInnerHTML={{ __html: html }} />;

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

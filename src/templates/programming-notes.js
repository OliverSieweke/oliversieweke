import React       from "react";
import { graphql } from "gatsby";


const ProgrammingNotes = ({ data: { markdownRemark: { html, frontmatter: { title } } } }) => (
    <React.Fragment>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </React.Fragment>
);

export default ProgrammingNotes;

export const query = graphql`
    query ProgrammingNotesQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;

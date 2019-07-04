import React, { useEffect } from "react";
import { graphql }          from "gatsby";

import { PageSEO }               from "../components/seo/page-seo.js";
import { ProgrammingNoteSchema } from "../components/seo/schema-org/programming-note.js";
import { Markdown }              from "../components/markdown.js";

import { useJavaScriptNotesToc } from "../utils/static-queries/use-javascript-notes-toc.js";

// ===================================================================================================================\\

const ProgrammingNote = ({ data, location, setToc }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const { javaScriptNote } = data;
    const { articleSection, childMarkdownRemark } = javaScriptNote;
    const { frontmatter, wordCount: { wordCount }, internal: { articleBody } } = childMarkdownRemark;

    const toc = useJavaScriptNotesToc();

    useEffect(() => {
        setToc(toc);
        return setToc;
    }, []);

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO pageMetadata={{ ...frontmatter, articleSection, wordCount, articleBody }}
                     Schema={ProgrammingNoteSchema}
                     location={location}/>
            <Markdown markdown={childMarkdownRemark}/>
        </React.Fragment>
    );
};

export default ProgrammingNote;

// QUERY ---------------------------------------------------------------------------------------------------------------
export const query = graphql`
    query JavaScriptQuery($slug: String!) {
        javaScriptNote: file(fields: { slug: { eq: $slug }}, sourceInstanceName: {eq: "JavaScriptNote"}) {
            ...markdownHtmlFragment
        }
    }
`;

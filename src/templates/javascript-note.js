import React, { useEffect }     from "react";
import { graphql }              from "gatsby";
import { Markdown }             from "../components/common/markdown.js";
// DATA ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { useJavaScriptToc }     from "../static-queries/use-javascript-toc.js";
// SEO •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { PageSEO }              from "../components/seo/page-seo.js";
import { JavaScriptNoteSchema } from "../components/seo/schemas/javascript-note.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import "../styles/code.css";
// Fonts •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import "typeface-source-code-pro";

// ================================================================================================================== \\
// ============================================ JAVASCRIPT NOTE TEMPLATE ============================================ \\

export default function JavaScriptNote({ data, location, setToc }) {
// DATA ----------------------------------------------------------------------------------------------------------------
    const { javaScriptNote } = data;
    const { articleSection, childMarkdownRemark } = javaScriptNote;
    const { frontmatter, wordCount: { wordCount }, internal: { articleBody } } = childMarkdownRemark;
    const metadata = { ...frontmatter, articleSection, wordCount, articleBody };

    const toc = useJavaScriptToc();

    // noinspection JSCheckFunctionSignatures
    useEffect(() => {
        setToc(toc);
        return setToc;
    }, []);

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO location={location} Schema={JavaScriptNoteSchema} metadata={metadata}/>

            <Markdown markdown={childMarkdownRemark}/>
        </React.Fragment>
    );
}

// QUERY ---------------------------------------------------------------------------------------------------------------
export const query = graphql`
    query JavaScriptNoteQuery($slug: String!) {
        javaScriptNote: file(fields: { slug: { eq: $slug } }, sourceInstanceName: { eq: "JavaScriptNote" }) {
            ...markdownHtmlFragment
        }
    }
`;

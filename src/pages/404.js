import React       from "react";
import { Link }    from "gatsby";
// SEO •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { PageSEO } from "../components/seo/page-seo.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles      from "../styles/404.module.css";


// ================================================================================================================== \\
// =============================================== 404 PAGE ========================================================= \\

export default function NotFound({ location }) {
    const metadata = {
        title: "404 | Oliver Sieweke",
        description: "Page not found.",
    };

    return (
        <React.Fragment>
            <PageSEO location={location} metadata={metadata}/>

            <h1>Ooops! Page not found!</h1>
            <Link className={styles.link} to="/">
                Back to Homepage!
            </Link>
        </React.Fragment>
    );
}

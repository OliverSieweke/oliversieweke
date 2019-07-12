import React, { useState } from "react";
import { GlobalSEO }       from "./global-seo.js";
import { Header }          from "./header.js";
import { JavaScriptToc }   from "../javascript/javascript-toc.js";
import { Footer }          from "./footer.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import "../../styles/global.css";
import styles              from "../../styles/layout.module.css";
// Fonts •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import "typeface-merriweather";
import "typeface-lato";

// ================================================================================================================== \\
// ================================================ LAYOUT COMPONENT ================================================ \\

export const Layout = ({ children, location }) => {
    const [toc, setToc] = useState(); // A slightly different layout is required for the Javascript notes with TOC.

    return (
        <div className={styles.layout}>
            <GlobalSEO/>
            <Header/>
            <div className={styles.page}>
                {toc && <JavaScriptToc toc={toc} location={location}/>}
                <div className={styles.contentContainer}>
                    <div className={`${styles.content} ${toc ? styles.javascriptContent : ""}`}>
                        <main className={styles.main}>
                            {React.cloneElement(children, { setToc })}
                        </main>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

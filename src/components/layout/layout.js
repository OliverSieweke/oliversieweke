import React, { useState } from "react";
import { GlobalSEO }       from "../seo/global-seo.js";
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
    // A slightly different layout is required for the Javascript notes with TOC.
    const [toc, setToc] = useState();
    const [tocVisible, setTocVisible] = useState();

    return (
        <div className={styles.layout}>
            <GlobalSEO/>
            <Header {...{ toc, tocVisible, setTocVisible }}/>
            <div className={styles.page}>
                {tocVisible && <JavaScriptToc {...{ toc, setTocVisible, location }}/>}
                <div className={styles.contentContainer}>
                    <div className={`${styles.content} ${toc ? styles.javascriptContent : ""}`}>
                        <main className={styles.main}>
                            {React.cloneElement(children, { setToc, setTocVisible })}
                        </main>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

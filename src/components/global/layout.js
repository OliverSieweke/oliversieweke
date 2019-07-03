import React, { useState } from "react";

import { GlobalSEO } from "./global-seo.js";
import { Header }    from "./header.js";
import { Toc }       from "../javascript/toc.js";
import { Footer }    from "./footer.js";

import "./global.css";
import styles        from "./layout.module.css";

// ================================================================================================================== \\

const Layout = ({ children, location }) => {
    const [toc, setToc] = useState();

    return (
        <React.Fragment>
            <GlobalSEO/>
            <div className={styles.layout}>
                <Header/>
                <div className={styles.page}>
                    {toc && <Toc toc={toc} location={location}/>}
                    <div className={styles.contentContainer}>
                        <div className={`${styles.content}${toc ? ` ${styles.javascriptContent}` : ""}`}>
                            <main className={styles.main}>
                                {React.cloneElement(children, { setToc })}
                            </main>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Layout;

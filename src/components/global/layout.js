import React from "react";

import { GlobalSEO } from "./global-seo.js";
import { Header }    from "./header.js";
import { Footer }    from "./footer.js";

import "./global.css";
import styles        from "./layout.module.css";

// ================================================================================================================== \\

const Layout = ({ children }) => (
    <React.Fragment>
        <GlobalSEO />
        <div className={styles.layout}>
            <Header />
            <div className={styles.background}>
                <div className={styles.page}>
                    <main className={styles.main}>
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    </React.Fragment>
);

export default Layout;

import React         from "react";
import { GlobalSEO } from "../seo/global-seo.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import "../../styles/global.css";
import styles        from "../../styles/layout.module.css";
// Fonts •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import "typeface-merriweather";
import "typeface-lato";

// ================================================================================================================== \\
// ================================================ LAYOUT COMPONENT ================================================ \\

export const Layout = ({ children }) => (<React.Fragment>
        <GlobalSEO/>
        <div className={styles.page}>
            <main className={styles.main}>
                {React.cloneElement(children)}
            </main>
        </div>
    </React.Fragment>
);

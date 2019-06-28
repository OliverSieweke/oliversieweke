import React from "react";

import { GlobalSEO } from "./global-seo.js";
import { Header }    from "./header.js";
import { Footer }    from "./footer.js";

// ================================================================================================================== \\

const Layout = ({ children }) => (
    <React.Fragment>
        <GlobalSEO />
        <Header />
        <main>{children}</main>
        <Footer />
    </React.Fragment>
);

export default Layout;

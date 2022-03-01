import React                   from "react";
// Data ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// SEO •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { PageSEO }             from "../components/seo/page-seo.js";
import { OliverSiewekeSchema } from "../components/seo/schemas/oliver-sieweke.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••


// ================================================================================================================== \\
// =================================================== INDEX PAGE =================================================== \\

export default function Index({ location }) {
// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO location={location} Schema={OliverSiewekeSchema}/>
                <h1>🛠 Under Construction 🛠</h1>
                <p>
                    {/* eslint-disable-next-line max-len */}
                    Thanks for dropping by! I&apos;ve had troubles keeping the content of this website up to date. I have taken things down temporarily and am hoping to come back online in 2022.
                </p>
                <p>
                    If you wish, you may take this as an opportunity to reflect on life instead...
                </p>
        </React.Fragment>
    );
}

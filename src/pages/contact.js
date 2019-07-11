import React                   from "react";
// SEO •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { PageSEO }             from "../components/seo/page-seo.js";
import { OliverSiewekeSchema } from "../components/seo/schemas/oliver-sieweke.js";
// Queries •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { useProfileImage }     from "../static-queries/use-profile-image.js";


// ===================================================================================================================\\
// ============================================= CONTACT PAGE ======================================================= \\

export default function Contact({ location }) {
    const { publicURL } = useProfileImage();

    return (
        <React.Fragment>
            <PageSEO location={location} Schema={OliverSiewekeSchema} metadata={{ image: publicURL }}/>

            <h1>Contact</h1>

            <p>
                The best way to contact me is at <a title="Email" href="mailto:oliver@sieweke.eu">oliver@sieweke.eu</a>.
            </p>

            <br/>
            <hr/>
            <br/>

            <h2>I am open to new opportunities!</h2>
            <p>
                If you came here for recruitment purposes you may want to have a look at my&nbsp;
                <a
                    title="CV"
                    href="/cv-oliver-sieweke.pdf"
                    download
                >
                    CV
                </a>
                &nbsp;or the&nbsp;
                <a
                    title="Reference Letter"
                    href="/reference-letter-oliver-sieweke.pdf"
                    download
                >
                    reference letter
                </a>
                {/* eslint-disable-next-line max-len */}
                &nbsp;from my former employee. You will also find links to my various online profiles at the bottom of the page.
            </p>
            <p>
                The main things I am looking out for at the moment are:
            </p>
            <ul>
                <li>A place with talented people, with whom I can learn and discuss ideas.</li>
                <li>A position geared towards backend work with Node.js.</li>
                <li>A friendly and dynamic work environment.</li>
            </ul>
        </React.Fragment>
    );
}

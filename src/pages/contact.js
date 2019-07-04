import React from "react";

import { PageSEO }             from "../components/seo/page-seo.js";
import { OliverSiewekeSchema } from "../components/seo/schema-org/oliver-sieweke.js";

// ===================================================================================================================\\

function Contact({ location }) {
    return (
        <React.Fragment>
            <PageSEO Schema={OliverSiewekeSchema} location={location}/>
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
                <a title="CV"
                   href="/cv-oliver-sieweke.pdf"
                   download
                >CV</a>&nbsp;
                or the&nbsp;
                <a
                    title="Reference Letter"
                    href="/reference-letter-oliver-sieweke.pdf"
                    download
                >reference letter</a>&nbsp;
                from my former employee.&nbsp;
                You will also find links to my various online profiles at the bottom of the page.
            </p>
            <p>The main things I am looking out for at the moment are:</p>
            <ul>
                <li>A place with talented people, with whom I can learn and discuss ideas.</li>
                <li>A position geared towards backend work with Node.js.</li>
                <li>A friendly and dynamic work environment.</li>
            </ul>
        </React.Fragment>
    );
}

export default Contact;

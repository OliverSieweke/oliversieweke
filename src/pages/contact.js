import React                   from "react";
import { PageSEO }             from "../components/seo/page-seo.js";
import { OliverSiewekeSchema } from "../components/seo/schema-org/oliver-sieweke.js";

function Contact({ location }) {
    return (
        <React.Fragment>
            <PageSEO Schema={OliverSiewekeSchema} location={location} />
            <h1>Contact</h1>
            <p>The best way to contact me is at oliver@sieweke.eu.</p>
            <p>If you came here for recruitment purposes, you may want to have a look at my CV and LinkedIn profile.</p>
        </React.Fragment>);
}

export default Contact;

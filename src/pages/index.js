import React       from "react";
import { graphql, Link } from "gatsby";

import { PageSEO }             from "../components/seo/page-seo.js";
import { OliverSiewekeSchema } from "../components/seo/schema-org/oliver-sieweke.js";
import { Image }               from "../components/image.js";


// ===================================================================================================================\\

const IndexPage = ({ data: { profileImage }, location }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const birthday = new Date(1992, 8, 7);
    const ageDate = new Date(Date.now() - birthday.getTime());
    const age = ageDate.getUTCFullYear() - 1970;

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO Schema={OliverSiewekeSchema} location={location} />
            <h1>About</h1>
            <div>
                <div>
                    <p>
                        Hi there! I am a {age} year-old software engineer based in Berlin.
                    </p>
                    <p>

                        I have spent most of my life around France and Germany with some important stops in the Anglo Saxon world (UK, New Zealand and Australia)
                        I started out studying Mathematics and Philosophy. After a misguided turn into Economics I took some thinking time on a New Zealand vineyard and decided I would do a good programmer. Now I am having a great time coding, mostly in JavaScript. Ultimately I would like to end up at a place where I could think deeply about the ways digitalisation is affection our privacy and automation is affecting our and how both are affecting our democracies the ownership of data is affecting our democracies.

                        The main motivation behind this website was to share my [projects](/projects/) and javascript notes. Now that it's there, things might get added.

                        I started out studying Mathematics and Philosophy. After a misguided turn into Economics I took some thinking time on a New Zealand vineyard and decided I would do a good programmer. Now I am having a great time coding, mostly in JavaScript. Ultimately I would like to end up at a place where I could think deeply about the ways digitalisation is affection our privacy and automation is affecting our and how both are affecting our democracies the ownership of data is affecting our democracies.
                    </p>
                    <p>
                        The main motivation behind this website was to share my <Link to="/projects/"/> and javascript notes. Now that it&apos;s there, things might get added. I&apos;ll probably use it to other effects.
                    </p>
                </div>
                <Image image={profileImage} alt="Profile Photo - Oliver Sieweke" />
            </div>
        </React.Fragment>
    );
};
export default IndexPage;

// Query ---------------------------------------------------------------------------------------------------------------
export const query = graphql`
    query ProfileImageQuery {
        profileImage: file(relativePath: { eq: "profile.png" }, sourceInstanceName: {eq: "Images"}) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`;

import React             from "react";
import { graphql, Link } from "gatsby";
import Img               from "gatsby-image";


import { PageSEO }             from "../components/seo/page-seo.js";
import { OliverSiewekeSchema } from "../components/seo/schema-org/oliver-sieweke.js";

import styles from "./index.module.css";

// ===================================================================================================================\\

const IndexPage = ({ data: { profileImage }, location }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const birthday = new Date(1992, 8, 7);
    const ageDate = new Date(Date.now() - birthday.getTime());
    const age = ageDate.getUTCFullYear() - 1970;

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO Schema={OliverSiewekeSchema} location={location}/>
            <div>
                <h1>About</h1>
                <Img
                    className={styles.profileImage}
                    fixed={profileImage.childImageSharp.fixed}
                    alt="Profile Photo - Oliver Sieweke"
                />
                <p>
                    Hi there! I am a {age} year-old Web Developer based in Berlin.
                    I have spent most of my life around France and Germany with some important stops in the Anglo-Saxon world (UK, Australia and New Zealand).
                </p>
                <p>
                    I started out studying&nbsp;
                    <a title="Oxford Mathematics and Philosophy"
                       href="https://www.maths.ox.ac.uk/study-here/undergraduate-study/which-course/mathematics-and-philosophy"
                       target="_blank"
                       rel="noopener noreferrer"
                    >Mathematics and Philosophy</a>, which I absolutely loved and which is still having a profound impact on my way of thinking and tackling problems.
                    After a misguided but instructive turn into&nbsp;
                    <a title="Sciences Po EPP"
                       href="https://www.sciencespo.fr/public/en/content/economics-and-public-policy"
                       target="_blank"
                       rel="noopener noreferrer"
                    >Economics</a>, I took some thinking time working on the world&apos;s most beautifully located&nbsp;
                    <a title="Obsidian Wines Vineyard"
                       href="https://www.google.com/maps/place/Obsidian+Vineyard/@-36.779631,175.0552717,14z/data=!4m5!3m4!1s0x6d72c8e00003203b:0xc66945c0805877ea!8m2!3d-36.7882844!4d175.0634471"
                       target="_blank"
                       rel="noopener noreferrer"
                    >vineyard</a> and decided I would do a great developer.
                    This was one of my better ideas and I am now having an amazing time coding full-time, mostly in JavaScript.
                </p>
                <p>
                    Ultimately, after some more years of programming experience, I would like to end up at a place where I could think deeply about our evolving democracies, in particular about the ways they are impacted by the digitalisation, automation and financialisation of the economy.
                </p>
                <p>
                    The main motivation behind this website was to share my <Link to="/projects/">projects</Link> and <Link
                    to="/javascript/">JavaScript notes</Link>. Now that it&apos;s there I might start putting it to other uses. Please roam about and feel free to <Link
                    to="/contact/">contact</Link> me!
                </p>
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
                fixed(width: 150) {
                    ...GatsbyImageSharpFixed_tracedSVG
                }
            }
        }
    }
`;

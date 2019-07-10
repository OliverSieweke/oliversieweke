import React                   from "react";
import { Link }                from "gatsby";
import Img                     from "gatsby-image";
// Queries •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { useProfileImage }     from "../static-queries/use-profile-image.js";
// SEO •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { PageSEO }             from "../components/seo/page-seo.js";
import { OliverSiewekeSchema } from "../components/seo/schemas/oliver-sieweke.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles                  from "../styles/index.module.css";


// ================================================================================================================== \\
// ============================================== INDEX PAGE ======================================================== \\

export default function Index({ location }) {
// DATA ----------------------------------------------------------------------------------------------------------------
    // Age
    const birthday = new Date(1992, 8, 7); /* eslint-disable-line no-magic-numbers */
    const ageDate = new Date(Date.now() - birthday.getTime());
    const age = ageDate.getUTCFullYear() - 1970;

    // Profile Image
    const { publicURL, childImageSharp } = useProfileImage();

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO location={location} Schema={OliverSiewekeSchema} metadata={{ image: publicURL }}/>

            <h1>About</h1>
            <Img
                className={styles.profileImage}
                fixed={childImageSharp.fixed}
                alt="Profile Photo - Oliver Sieweke"
            />
            <p>
                {/* eslint-disable-next-line max-len */}
                Hi there! I am a {age} year-old Web Developer based in Berlin. I have spent most of my life around France and Germany with some important stops in the Anglo-Saxon world (UK, Australia and New Zealand).
            </p>
            <p>
                I started out studying&nbsp;
                <a
                    title="Oxford Mathematics and Philosophy"
                    href="https://www.maths.ox.ac.uk/study-here/undergraduate-study/which-course/mathematics-and-philosophy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mathematics and Philosophy
                </a>
                {/* eslint-disable-next-line max-len */}
                , which I absolutely loved and which is still having a profound impact on my way of thinking and tackling problems. After a misguided but instructive turn into&nbsp;
                <a
                    title="Sciences Po EPP"
                    href="https://www.sciencespo.fr/public/en/content/economics-and-public-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Economics
                </a>
                {/* eslint-disable-next-line max-len */}
                , I took some time working on the world&apos;s most beautifully located&nbsp;
                <a
                    title="Obsidian Wines Vineyard"
                    href="https://www.google.com/maps/place/Obsidian+Vineyard/@-36.7989396,175.0362607,11.97z/data=!4m5!3m4!1s0x6d72c8e00003203b:0xc66945c0805877ea!8m2!3d-36.7882844!4d175.0634471" /* eslint-disable-line max-len */
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    vineyard
                </a>
                {/* eslint-disable-next-line max-len */}
                &nbsp;and decided I would become a developer. This was one of my better ideas and I am now having an amazing time coding full-time, mostly in JavaScript.
            </p>
            <p>
                {/* eslint-disable-next-line max-len */}
                Ultimately, after some more years of programming experience, I would like to end up at a place where I could think deeply about our evolving democracies, in particular about the impacts of the digitalisation, automation and financialisation of the economy.
            </p>
            <p>
                The main motivation behind this website was to share my&nbsp;
                <Link to="/projects/">
                    projects
                </Link>
                &nbsp;and&nbsp;
                <Link to="/javascript/">
                    JavaScript notes
                </Link>
                . Now that it&apos;s here I might start putting it to other uses. Please roam about and feel free to
                <Link to="/contact/">
                    contact
                </Link>
                &nbsp;me!
            </p>
        </React.Fragment>
    );
}

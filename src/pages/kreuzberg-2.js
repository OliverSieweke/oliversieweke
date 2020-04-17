import React                  from "react";
import Img                    from "gatsby-image";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles                 from "../styles/kreuzberg.module.css";
import { useFlatLayoutImage } from "../static-queries/use-kreuzberg-images.js";
import { PageSEO }            from "../components/seo/page-seo.js";
import { useSiteMetaData }    from "../static-queries/use-site-metadata.js";


// ================================================================================================================== \\
// =================================================== INDEX PAGE =================================================== \\

export default function Kreuzberg2({ location }) {
    const { presentationPicture, flatLayout, flatPictures } = useFlatLayoutImage();
    const url = location.href ? location.href.substr(location.href.lastIndexOf("/") + 1)
                              : useSiteMetaData().siteUrl;

    const metadata = {
        title: "Flat in Kreuzberg1 - 56m² - 220€ / week",
        description: "Beautiful flat for 2 in Kreuzberg1/Bergmankiez available immediately.",
        image: `/kreuzberg/${presentationPicture.relativePath}`,
    };

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO location={location} metadata={metadata}/>
            <main className={styles.main}>
                <h1 className={styles.h1}>Flat in Kreuzberg - 56m<sup>2</sup> - 220€ / week</h1>
                <h2 className={styles.h2}>Immediately until end of June</h2>
                <hr/>
                <br/>
                <h3 className={styles.h3}>Hi there!</h3>
                <p>
                    Lucky you, someone forwarded you this link! Oli here 🐒, I temporarily moved out of my furnished flat in Kreuzberg/Bergmannkiez and it is available until end of June.
                </p>
                <div className={styles.flatPicturesContainer}>
                    {flatPictures.sort((a, b) => a.name - b.name).map(flatPicture => (
                        <a
                            className={`${styles.flatPictureContainer} ${styles[`flatPictureContainer${flatPicture.name}`]}`}
                            key={flatPicture.name}
                            href={`${url}/kreuzberg/${flatPicture.relativePath}`}
                        >
                            {/* <div>{JSON.stringify(styles)}</div> */}
                            <Img
                                className={styles.flatPicture}
                                fluid={flatPicture.childImageSharp.fluid}
                                alt={`Flat Picture ${flatPicture.name}`}
                            />
                        </a>
                    ))}
                </div>
                <h3 className={styles.h3}>Flat</h3>
                <p>The flat is <strong>56m<sup>2</sup></strong> and perfect for a couple (you can have it just for yourself as well of course). There&apos;s one bedroom and a larger room which combines the kitchen and living area. It has a nice parquet floor and is very bright.
                </p>
                <p>
                    <em>This is more or less what it looks like:</em>
                </p>
                <div className={styles.flatLayoutBorder}>
                    <a
                        href={`${url}/kreuzberg/${flatLayout.relativePath}`}
                    >
                        <Img
                            fluid={flatLayout.childImageSharp.fluid}
                            alt="Flat Layout"
                        />
                    </a>
                </div>
                <h3 className={styles.h3}>Location</h3>
                <p>
                    The flat is located at <strong>Gneisenaustr. 26</strong> in Kreuzberg/Bergmankiez. It&apos;s right next to the U7 Gneisenaustr. stop, around the corner from Bergmannstr. and the Marheineke covered market.
                    <br/>
                    It&apos;s in the inner courtyard, very quiet, 5th floor (yeah... no elevator 🙈).
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.3439428926795!2d13.393069415806417!3d52.49101337980871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fd7996b979f%3A0xb1cfb0d5da5350e4!2sGneisenaustra%C3%9Fe%2026%2C%2010961%20Berlin!5e0!3m2!1sen!2sde!4v1583408153516!5m2!1sen!2sde"
                        className={styles.map}
                ></iframe>
                <h3 className={styles.h3}>Furniture</h3>
                <p>
                    You&apos;ll be able to keep most of the furniture that you see on the pictures, as well as plants and kitchenware. Whatever isn&apos;t to your taste will easily go with me or in the attic that is just above the flat.
                </p>
                <h3 className={styles.h3}>Price</h3>
                <p>I am currently paying 929€ + charges and would like to sublet the flat for 220€ / week (wifi, electricity and gas included).
                </p>
                <p>
                </p>
                <hr/>
                <br/>
                <h3 className={styles.h3}>Contact</h3>
                <p>Feel free to share the link and to drop me an email if you’re interested or if you have any questions: <a
                    className={styles.email}
                    title="Email"
                    href="mailto:oliver@sieweke.eu">oliver@sieweke.eu</a><br/><em>(German, French and English are all fine.)</em>
                </p>
                <p>
                    If you want to know more about me, just get rid of the <em>/kreuzberg-2/</em> part in the url and you&apos;ll land on my website (which I keep mostly for professional purposes as a developer).
                </p>
            </main>
        </React.Fragment>
    );
}

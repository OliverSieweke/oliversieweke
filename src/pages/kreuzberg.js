import React                  from "react";
import Img                    from "gatsby-image";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles                 from "../styles/kreuzberg.module.css";
import { useFlatLayoutImage } from "../static-queries/use-kreuzberg-images.js";
import { PageSEO }            from "../components/seo/page-seo.js";
import { useSiteMetaData }    from "../static-queries/use-site-metadata.js";


// ================================================================================================================== \\
// =================================================== INDEX PAGE =================================================== \\

export default function Kreuzberg({ location }) {
    const { presentationPicture, flatLayout, flatPictures } = useFlatLayoutImage();
    const url = location.href ? location.href.substr(location.href.lastIndexOf("/") + 1)
                              : useSiteMetaData().siteUrl;

    const metadata = {
        title: "Flat in Kreuzberg",
        description: "Beautiful flat in Kreuzberg/Bergmannkiez",
        image: `/kreuzberg/${presentationPicture.relativePath}`,
    };

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO location={location} metadata={metadata}/>
            <main className={styles.main}>
                <h1 className={styles.h1}>Flat in Kreuzberg - 56m<sup>2</sup></h1>
                <hr/>
                <br/>
                <h3 className={styles.h3}>Hi there!</h3>
                <p>
                    Interested in my flat? Lucky you, someone forwarded you this link!
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
                <p>The flat is <strong>56m<sup>2</sup></strong>, there&apos;s one bedroom and a larger room which combines the kitchen and living area. It has a nice parquet floor and is very bright.
                </p>
                <p>
                    This is more or less what it looks like:
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
                    The flat is located at <strong>Gneisenaustr. 26</strong> in Kreuzberg/Bergmannkiez. It&apos;s right next to the U7 Gneisenaustr. stop, around the corner from Bergmannstr. and the Marheineke covered market.
                    <br/>
                    It&apos;s in the inner courtyard, very quiet, 5th floor (yeah... no elevator).
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.3439428926795!2d13.393069415806417!3d52.49101337980871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fd7996b979f%3A0xb1cfb0d5da5350e4!2sGneisenaustra%C3%9Fe%2026%2C%2010961%20Berlin!5e0!3m2!1sen!2sde!4v1583408153516!5m2!1sen!2sde"
                        className={styles.map}
                ></iframe>
            </main>
        </React.Fragment>
    );
}

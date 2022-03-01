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
        title: "Flat in Kreuzberg - 56m² - 954 €",
        description: "Beautiful flat for 2 in Kreuzberg/Bergmannkiez available from April 2022.",
        image: `/kreuzberg/${presentationPicture.relativePath}`,
    };

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO location={location} metadata={metadata}/>
            <main className={styles.main}>
                <h1 className={styles.h1}>Flat in Kreuzberg - 56m<sup>2</sup> - 954 €</h1>
                <h2 className={styles.h2}>Available from April 2022</h2>
                <hr/>
                <br/>
                <h3 className={styles.h3}>Hi there!</h3>
                <p>
                    Lucky you, someone forwarded you this link! Oli here, I’m subletting my flat in Kreuzberg/Bergmannkiez for a year and most probably longer (read on for details). It will be available from the <strong>01.04.2022</strong>.
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
                <h3 className={styles.h3}>Furniture</h3>
                <p>
                    You could keep part of the furniture that you see on the pictures. Whatever isn&apos;t to your taste and doesn&apos;t go with me will easily go in the attic just above the flat.
                </p>
                <h3 className={styles.h3}>Price</h3>
                <p>I am charging the same rent I am paying myself. The only reason I am not giving up the flat completely is that there is a slight chance I might not be able to stay more than a year in my new location. Ideally I would stay permanently in my new flat and so would you.</p>
                <p>The rent is <strong>954 €</strong> (<em>Warmmiete</em>).</p>
                <p>Additional costs will depend on your consumption, based on my current costs you can expect something close to the following:</p>
                <ul>
                    <li><strong>Gas:</strong> 39 €</li>
                    <li><strong>Electricity:</strong> 34 €</li>
                    <li><strong>Internet:</strong> 33 €</li>
                </ul>

                I would also ask you for a deposit.
                <p>
                </p>
                <h3 className={styles.h3}>Other</h3>
                <p>
                    It&apos;s all in agreement with the landlord, so you&apos;ll get a proper contract and you&apos;ll be able to do your <em>Anmeldung</em> etc.
                    The only administrative hassle will be to sign the subletting contract, for gas, electricity and wifi, you could keep my ongoing contracts if you wish.
                </p>
                <br/>
                <hr/>
                <br/>
                <h3 className={styles.h3}>Contact</h3>
                <p>Feel free to share the link and to drop me an email if you’re interested or if you have any questions: <a
                    className={styles.email}
                    title="Email"
                    href="mailto:oliver@sieweke.eu">oliver@sieweke.eu</a><br/><em>(German, French and English are all fine.)</em>
                </p>
            </main>
        </React.Fragment>
    );
}

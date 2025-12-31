import React                  from "react";
import Img                    from "gatsby-image";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import * as styles                 from "../styles/kreuzberg.module.css";
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
        title: "Flat in Kreuzberg - 56m² - 1280€ / month",
        description: "Beautiful flat in Kreuzberg/Bergmannkiez available from end of January for 3 months",
        image: `/kreuzberg/${presentationPicture.relativePath}`,
    };

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO location={location} metadata={metadata}/>
            <main className={styles.main}>
                <h1 className={styles.h1}>Flat in Kreuzberg - 56m<sup>2</sup> - 1280€ / month</h1>
                <h2 className={styles.h2}>Available 17.01.26 - 08.05.26 (+/- 1 week)</h2>

                <hr/>
                <br/>
                <h3 className={styles.h3}>Hi there!</h3>
                <p>
                    Lucky you, someone forwarded you this link! Oli here, I will be living in London for 3 months and am temporarily subletting my Berlin flat.
                </p>
                <div className={styles.flatPicturesContainer}>
                    {flatPictures.sort((a, b) => a.name - b.name).map(flatPicture => (
                        <a
                            className={`${styles.flatPictureContainer} ${styles[`flatPictureContainer${flatPicture.name}`]}`}
                            key={flatPicture.name}
                            href={`${url}/kreuzberg/${flatPicture.relativePath}`}
                        >
                            <Img
                                className={styles.flatPicture}
                                fluid={flatPicture.childImageSharp.fluid}
                                alt={`Flat Picture ${flatPicture.name}`}
                            />
                        </a>
                    ))}
                </div>
                <h3 className={styles.h3}>Flat</h3>
                <p>The flat is <strong>56m<sup>2</sup></strong> and perfect for a couple (you can have it just for yourself as well of course). There&apos;s one bedroom and a larger room which combines the kitchen and living area. It has a nice parquet floor and is bright.
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
                    The flat is located at <strong>Gneisenaustr. 26</strong> in Kreuzberg/Bergmannkiez. It&apos;s right next to the U7 stop, around the corner from Bergmannstr. and the Marheineke covered market.
                    <br/>
                    It&apos;s in the inner courtyard, very quiet, 5th floor (yeah... no elevator).
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.3439428926795!2d13.393069415806417!3d52.49101337980871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fd7996b979f%3A0xb1cfb0d5da5350e4!2sGneisenaustra%C3%9Fe%2026%2C%2010961%20Berlin!5e0!3m2!1sen!2sde!4v1583408153516!5m2!1sen!2sde"
                        className={styles.map}
                ></iframe>
                <h3 className={styles.h3}>Furniture & Accessories</h3>
                <p>
                    The flat is fully functional, you&apos;ll be able to use all of the furniture that you see on the pictures.  Whatever isn&apos;t to your taste could also go in the attic.
                </p>
                <p>
                    There is a washing machine and dryer as well as a dishwasher, oven and microwave.
                </p>
                <p>
                    I have reliable 50 Mps internet and you can use my desk setup with the screen. There is also a projector and bluetooth speakers in the living room.
                </p>
                <p>
                    You are also welcome to use my bike during your stay.
                </p>
                <h3 className={styles.h3}>Price</h3>
                <p>I am subletting the flat for 1280€ / month all bills included (I am currently paying 1070€ including all charges and am adding 20% for the furniture).
                </p>
                <p>I would ask you for a deposit of 800€.</p>
                <h3 className={styles.h3}>Other</h3>
                <p>This is all in agreement with the landlord, so we can make a proper contract and you can do an <em>Anmeldung</em> if needed.
                </p>
                <p>
                    My plants have been living in the flat for 8 years too, it would be great if you could keep an eye on them. They are low maintenance and have an autonomous watering system, that needs to be filled up every 10 days or so.
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
                    You are welcome to come by for a visit, I am quite flexible with dates and times. Alternatively we could also arrange a video call.
                </p>
            </main>
        </React.Fragment>
    );
}

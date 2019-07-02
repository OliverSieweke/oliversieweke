import React from "react";

import styles from "./footer.module.css";

import { useFooterLinks } from "../../utils/static-queries/use-footer-links.js";

// ================================================================================================================== \\

export const Footer = () => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const footerLinks = useFooterLinks();

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <footer className={styles.footer}>
            <nav>
                <ul className={styles.footerLinksList}>
                    {footerLinks.map(({ name, link, iconURL }) => (
                        <li key={link} className={styles.footerLink}>
                            <a title={name} href={link} target="_blank" rel="noopener noreferrer">
                                <img alt={name} src={iconURL} className={styles.footerImage} />
                            </a>
                        </li>
                    ))}
                </ul>
                <small className={styles.copyright}>
                    <a title="license"
                       rel="license"
                       href="http://creativecommons.org/licenses/by-nc/4.0/"
                       className={styles.copyrightLink}
                    >
                        <img alt="Creative Commons License"
                             src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png"
                             className={styles.copyrightImage}
                        />
                    </a>
                </small>
            </nav>
        </footer>
    );
};

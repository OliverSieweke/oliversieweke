import React              from "react";
import { useFooterLinks } from "../../utils/static-queries/use-footer-links.js";

// ================================================================================================================== \\

export const Footer = () => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const footerLinks = useFooterLinks();

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <footer>
            <nav>
                <ul>
                    {footerLinks.map(({ name, link, iconURL }) => (
                        <li key={link}>
                            <a title={name} href={link} target="_blank" rel="noopener noreferrer">
                                <img alt={name} src={iconURL} />
                            </a>
                        </li>
                    ))}
                </ul>
                <small>
                    <a title="license"
                       rel="license"
                       href="http://creativecommons.org/licenses/by-nc/4.0/"
                    >
                        <img alt="Creative Commons License"
                             src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png"
                        />
                    </a>
                </small>
            </nav>
        </footer>
    );
};

import React from "react";

const Footer = ({ footerLinks, footerLinkImages }) => (
    <footer>
        <nav>
            <ul>
                {footerLinks.map(({ name: linkName, link }) => {
                    // noinspection JSUnresolvedVariable
                    const imageUrl = footerLinkImages.find(({ name: imageName }) => linkName === imageName).publicURL;

                    return (
                        <li key={link}>
                            <a title={linkName} href={link} target="_blank" rel="noopener noreferrer">
                                <img alt={linkName} src={imageUrl} />
                            </a>
                        </li>
                    );
                })

                }
            </ul>
            <small><a title="license" rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/80x15.png" /></a></small>
        </nav>
    </footer>
);

export default Footer;

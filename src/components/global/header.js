import React    from "react";
import { Link } from "gatsby";

import styles from "./header.module.css";

import { useSiteMetaData } from "../../static-queries/use-site-metadata.js";

// ================================================================================================================== \\

export const Header = () => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const { navigationItems } = useSiteMetaData();

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <header className={styles.header}>
            <h1 className={styles.name}>
                <Link to="/" className={styles.nameLink}>
                    <span className={styles.firstName}>Oliver </span>
                    <span>Sieweke</span>
                </Link>
            </h1>
            <nav>
                <ul className={styles.navigationList}>
                    {navigationItems.map(({ link, linkText }) => (
                        <li key={link} className={styles.navigationItem}>
                            <Link to={link}
                                  className={styles.navigationLink}
                                  activeClassName={styles.activeLink}
                                  partiallyActive={link !== "/"}
                            >
                                {linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

import React               from "react";
import { Link }            from "gatsby";
// Data ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { useSiteMetaData } from "../../static-queries/use-site-metadata.js";
import { useBurgerMenu }   from "../../static-queries/use-burger-menu.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles              from "../../styles/layout.module.css";


// ================================================================================================================== \\
// ================================================ HEADER COMPONENT ================================================ \\

export const Header = ({ toc, tocVisible, setTocVisible }) => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const { navigationItems } = useSiteMetaData();
    const burgerMenuURL = useBurgerMenu().publicURL;

    const toggleTocVisible = () => setTocVisible(!tocVisible);

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
                                  // getProps={data => {
                                  //     console.log(data);
                                  //     return data.isCurrent ? { className: styles.activeLink } : null;
                                  // }}
                            >
                                {linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {toc && // We want to display the burger menu whenever a TOC is available
             <button onClick={toggleTocVisible} className={styles.burger}>
                 <img className={styles.burgerImage} alt="Menu" src={burgerMenuURL}/>
             </button>}
        </header>
    );
};

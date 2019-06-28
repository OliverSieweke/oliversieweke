import React               from "react";
import { Link }            from "gatsby";
import { useSiteMetaData } from "../../utils/static-queries/use-site-metadata.js";

// ================================================================================================================== \\

export const Header = () => {
// DATA ----------------------------------------------------------------------------------------------------------------
    const { navigationItems } = useSiteMetaData();

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <header>
            <h1>Oliver Sieweke</h1>
            <nav>
                <ul>
                    {navigationItems.map(({ link, name }) => (
                        <li key={name}>
                            <Link to={link}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

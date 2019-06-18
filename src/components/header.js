import React    from "react";
import { Link } from "gatsby";

const Header = ({ navigationItems }) => (
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

export default Header;

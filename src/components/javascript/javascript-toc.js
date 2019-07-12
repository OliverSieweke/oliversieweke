import React, { useEffect, useState } from "react";
import { Link }                       from "gatsby";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles                         from "../../styles/javascript.module.css";


// ================================================================================================================== \\
// ============================================ JAVASCRIPT TOC COMPONENT ============================================ \\

export const JavaScriptToc = ({ toc, setTocVisible, location }) => (
    <nav className={styles.toc}>
        {Boolean(toc.subNodes.length) &&
         toc.subNodes.map(node => (
             <TocItem
                 key={node.identifier}
                 depth={1}
                 {...node}
                 {...{ location, setTocVisible }}
             />
         ))}
    </nav>
);

const TocItem = ({ depth, name, subNodes, slug, location, setTocVisible }) => {
    const [open, setOpen] = useState(false);

    function toggleOpen(e) {
        e.preventDefault();     // Dont't navigate, only toggle
        e.stopPropagation();    // Dont't navigate, only toggle:
        setOpen(!open);
    }

    function handleLinkClick() {
        setOpen(true);
        if (matchMedia("screen and (max-width: 400px)").matches) {
            setTocVisible(false);
        }
    }

    // Open relevant folders on page load:
    // noinspection JSCheckFunctionSignatures
    useEffect(() => {
        if (location.pathname.match(new RegExp(`^${slug}`, "u"))) {
            setOpen(true);
        }
    }, []);

    const subItems = subNodes.length && subNodes.map(node => (
        <TocItem
            key={node.identifier}
            depth={depth + 1}
            {...node}
            {...{ location, setTocVisible }}
        />
    ));

    return (
        <ol className={styles.list}>
            <li className={styles.listItem}>
                <Link
                    className={`${styles.link} ${styles[`link${depth}`]}`}
                    activeClassName={styles.activeLink}
                    to={slug}
                    onClick={handleLinkClick}
                >
                    {Boolean(subNodes.length) &&
                     <span
                         className={`${styles.linkIcon} ${open ? styles.linkIconActive : ""}`}
                         onClick={toggleOpen}
                     >
                         ▸
                     </span>}
                    {name}
                </Link>
                {Boolean(subNodes.length) && open && subItems}
            </li>
        </ol>
    );
};

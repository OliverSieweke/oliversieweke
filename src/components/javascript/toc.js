import React, { useEffect, useState } from "react";
import { Link }                       from "gatsby";

import styles from "./toc.module.css";

// ===================================================================================================================\\

export const Toc = ({ toc, location }) => (
    <nav className={styles.toc}>
        {Boolean(toc.subNodes.length) &&
         toc.subNodes.map(node => <TocItem key={node.identifier} {...node} depth={1} location={location}/>)}
    </nav>
);

const TocItem = ({ name, subNodes, slug, depth, location }) => {
    const [open, setOpen] = useState(false);

    function toggleOpen(e) {
        // Dont't navigate, only toggle:
        e.preventDefault();
        e.stopPropagation();
        setOpen(!open);
    }

    useEffect(() => { // Open relevant folders on page load
        if (location.pathname.match(new RegExp(`^${slug}`, "u"))) {
            setOpen(true);
        }
    }, []);

    return (
        <ol className={styles.list}>
            <li className={styles.listItem}>
                <Link className={`${styles.link} ${styles[`link${depth}`]}`}
                      activeClassName={styles.activeLink}
                      to={slug}
                      onClick={() => setOpen(true)}
                >
                    {Boolean(subNodes.length) &&
                     <span className={`${styles.linkIcon} ${open ? styles.linkIconActive : ""}`}
                           onClick={toggleOpen}>
                         ▸
                     </span>}
                    {name}
                </Link>
                {Boolean(subNodes.length) && open &&
                 subNodes.map(node => <TocItem key={node.identifier} {...node} depth={depth + 1} location={location}/>)}
            </li>
        </ol>
    );
};

import React    from "react";
import { Link } from "gatsby";

// ===================================================================================================================\\

export const Toc = ({ toc }) => (
    <section>
        <nav>
            <ol>
                {toc.subNodes.map(node => <TocNode key={node.identifier} {...node} />)}
            </ol>
        </nav>
    </section>
);

const TocNode = ({ name, subNodes, slug }) => (
    <li>
        <Link to={slug}>{name}</Link>
        {Boolean(subNodes.length) &&
         <ol>
             {subNodes.map(node => <TocNode key={node.identifier} {...node} />)}
         </ol>}
    </li>
);

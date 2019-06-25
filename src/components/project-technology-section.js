import React from "react";

// ===================================================================================================================\\

// RENDER --------------------------------------------------------------------------------------------------------------
export const ProjectTechnologySection = ({ sectionName, technologiesList }) => (
    <section>
        <h3>{sectionName}</h3>
        <ul>
            {technologiesList.map(({ name, url, iconURL }) => (
                <li key={name}>
                    <a title={name} href={url} target="_blank" rel="noopener noreferrer">
                        <img alt={`${name} Logo`} src={iconURL} />
                        <span>{name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </section>
);

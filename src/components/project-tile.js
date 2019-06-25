import React from "react";

function ProjectTile({ name, title, logoURL, shortDescription, mainImageURL, github, url, icons }) {

    console.log("LOGO", logoURL)
    const githubIconURL = icons.find(({ name }) => name === "github").publicURL;
    const linkIconURL = icons.find(({ name }) => name === "link").publicURL;

    // TODO: add project name to alt attribute
    // TODO: project order
    return (
        <div>
            <img alt="Project Logo" src={logoURL} />
            {github
             && <a title="GitHub Repo" href={github} target="_blank" rel="noopener noreferrer">
                 <img alt="GitHub" src={githubIconURL} />
             </a>}
            {url
             && <a title="Website" href={url} target="_blank" rel="noopener noreferrer">
                 <img alt="Link" src={linkIconURL} />
             </a>
            }
            <img alt="Project Image" src={mainImageURL} />

            <p>{shortDescription}</p>
            <h2>{name}</h2>
            <h3>{title}</h3>
        </div>
    );
}

export default ProjectTile;

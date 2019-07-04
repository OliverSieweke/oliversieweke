import React from "react";
import Img   from "gatsby-image";

// ================================================================================================================== \\

export const Book = ({ name, subtitle, author, datePublished, cover, url, review }) => (
    <div>
        <a title={name} href={url}>
            <Img fluid={cover.childImageSharp.fluid} alt={`${name} Cover`}/>
            <h1>{name}</h1>
        </a>
        {subtitle && <h2>{subtitle}</h2>}
        <h2>{author.name}</h2>
        <h3>{datePublished}</h3>
        <p>{review}</p>
    </div>

);

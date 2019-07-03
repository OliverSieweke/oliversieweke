import React from "react";
import Img   from "gatsby-image";

export const Image = ({ className, image, alt }) => (
    <Img className={className}
         fluid={image.childImageSharp.fluid}
         alt={alt}/>
);

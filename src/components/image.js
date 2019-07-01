import React from "react";
import Img   from "gatsby-image";

export const Image = ({ image, alt }) => (
    <Img fluid={image.childImageSharp.fluid}
         alt={alt} />
);

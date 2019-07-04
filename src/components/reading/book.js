import React from "react";
import Img   from "gatsby-image";

import styles from "./book.module.css";
// ================================================================================================================== \\

export const Book = ({ name, subtitle, author, datePublished, cover, url, review, bookCount }) => (
    <section className={styles.book}>
        <a className={bookCount%2 ? styles.imageContainerLeft : styles.imageContainerRight} title={name} href={url}>
            <Img
                className={styles.image}
                fixed={cover.childImageSharp.fixed}
                alt={`${name} Cover`}/>
        </a>
        <a title={name} href={url}>
            <h1 className={styles.title}>{name}</h1>
        </a>
        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
        <h2 className={styles.authorDate}>{author.name}, {datePublished}</h2>
        <p className={styles.review}>{review}</p>
    </section>
);

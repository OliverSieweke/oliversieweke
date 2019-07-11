import React          from "react";
import Img    from "gatsby-image";
// Data ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { booksOrder } from "../../utils/reading/books-order.js";
// Styles ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import styles         from "../../styles/reading.module.css";


// ================================================================================================================== \\
// ============================================= READING YEAR COMPONENT ============================================= \\

export const ReadingYear = ({ year, books, bookCount }) => (
    <section>
        <h2 className={styles.year}>{year}</h2>
        <hr/>
        {
            books.sort(booksOrder(year))
                 .map(book => (
                     <Book
                         key={book.identifier} {...book}
                         bookCount={++bookCount} /* eslint-disable-line no-param-reassign */
                     />
                 ))
        }
    </section>
);


// ================================================================================================================== \\
// ================================================= BOOK COMPONENT ================================================= \\
function Book({ name, subtitle, author, datePublished, cover, url, review, bookCount }) {
    // noinspection JSUnresolvedVariable
    return (
        <section className={styles.book}>
            <a className={bookCount%2 ? styles.imageContainerLeft : styles.imageContainerRight} title={name} href={url}>
                <Img
                    className={styles.image}
                    fixed={cover.childImageSharp.fixed}
                    alt={`${name} Cover`}
                />
            </a>
            <a title={name} href={url}>
                <h1 className={styles.title}>{name}</h1>
            </a>
            {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
            <h2 className={styles.authorDate}>{author.name}, {datePublished}</h2>
            <p className={styles.review}>{review}</p>
        </section>
    );
}

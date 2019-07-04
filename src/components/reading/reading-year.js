import React from "react";

import { Book }       from "./book.js";
import { booksOrder } from "../../utils/reading/books-order.js";

import styles from "./reading-year.module.css";

// ================================================================================================================== \\

export const ReadingYear = ({ year, books, bookCount }) => (
    <section>
        <h2 className={styles.year}>{year}</h2>
        <hr/>
        {books.sort(booksOrder(year))
              .map(book => <Book key={book.identifier} {...book} bookCount={++bookCount}/>)}
    </section>
);

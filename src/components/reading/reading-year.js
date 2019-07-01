import React from "react";

import { Book }       from "./book.js";
import { booksOrder } from "../../utils/reading/books-order.js";

// ================================================================================================================== \\

export const ReadingYear = ({ year, books }) => (
    <section>
        <h1>{year}</h1>
        {books.sort(booksOrder(year))
              .map(book => <Book key={book.identifier} {...book} />)}
    </section>
);

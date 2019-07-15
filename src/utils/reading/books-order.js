const BOOKS_ORDER = {
    "2019": ["understanding-es6"],
    "2018": [
        "object-oriented-js",
        "javascript-the-good-parts",
    ],

};

export const booksOrder = year => (a, b) => BOOKS_ORDER[year].indexOf(a.identifier)
                                            - BOOKS_ORDER[year].indexOf(b.identifier);

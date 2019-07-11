import React              from "react";
import { ReadingYear }    from "../components/reading/reading-year.js";
// Data ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { useReadingData } from "../static-queries/use-reading-data.js";
// SEO •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
import { PageSEO }        from "../components/seo/page-seo.js";
import { ReadingSchema }  from "../components/seo/schemas/reading.js";


// ================================================================================================================== \\
// ================================================== READING PAGE ================================================== \\

export default function Reading({ location }) {
// DATA ----------------------------------------------------------------------------------------------------------------
    const reading = useReadingData();
    const readingByYear = reading.reduce((booksByYear, book) => {
        // noinspection JSUnresolvedVariable
        booksByYear[book.yearRead] = [...booksByYear[book.yearRead] || [], book];
        return booksByYear;
    }, {});

    let bookCount = 0; // Used to place book cover on the right or on the left.

// RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO location={location} Schema={ReadingSchema} pageMetadata={{ reading }}/>

            <h1>Reading</h1>

            {reading.length ? Object.entries(readingByYear)
                                    .sort(([a], [b]) => Math.sign(Number(b) - Number(a))) // Sort by year, descending
                                    .map(([year, books]) => {
                                        const readingYear = <ReadingYear key={year} {...{ year, books, bookCount }} />;
                                        bookCount += books.length;
                                        return readingYear;
                                    })
                            : <p>Sorry, I don&apos;t have any reading to share at the moment.</p>}
        </React.Fragment>
    );
}

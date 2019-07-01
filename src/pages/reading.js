import React from "react";

import { PageSEO }       from "../components/seo/page-seo.js";
import { ReadingSchema } from "../components/seo/schema-org/reading.js";
import { ReadingYear }   from "../components/reading/reading-year.js";

import { useSiteMetaData } from "../utils/static-queries/use-site-metadata.js";
import { useReadingData }  from "../utils/static-queries/use-reading-data.js";

function Reading({ location }) {
    const { license } = useSiteMetaData();
    const reading = useReadingData().map(book => ({
        ...book,
        reviewURL: location.href,
        reviewLicense: license,
    }));

    const readingByYear = reading.reduce((accumulator, book) => {
        if (accumulator[book.yearRead]) {
            accumulator[book.yearRead].push(book);
        } else {
            accumulator[book.yearRead] = [book];
        }
        return accumulator;
    }, {});

    // RENDER --------------------------------------------------------------------------------------------------------------
    return (
        <React.Fragment>
            <PageSEO pageMetadata={{ reading }} Schema={ReadingSchema} location={location} />
            <h1>Reading</h1>
            {reading.length ? Object.entries(readingByYear)
                                    .sort(([a], [b]) => Math.sign(Number(b) - Number(a)))
                                    .map(([year, books]) => <ReadingYear key={year} {...{ year, books }} />)
                            : <p>Sorry, I don&apos;t have any reading to share at the moment.</p>}
        </React.Fragment>
    );
}

export default Reading;

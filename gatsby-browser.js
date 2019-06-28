// See: https://www.gatsbyjs.org/docs/browser-apis/

// FONTS ===========================================================================================
import "typeface-merriweather";
import "typeface-lato";

// LAYOUT ==========================================================================================
import React  from "react";
import Layout from "./src/components/global/layout.js";

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

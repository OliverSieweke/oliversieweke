/* eslint-env node */
// See: https://www.gatsbyjs.org/docs/ssr-apis/

import React      from "react";
import { Layout } from "./src/components/layout/layout.js";

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

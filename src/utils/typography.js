import Typography from "typography";

const typography = new Typography({
    googleFonts: [
        {
            name: "Merriweather",
            styles: ["700"],
        },
        {
            name: "Lato",
            styles: ["300", "400", "700"],
        },
    ],
    headerFontFamily: ["Merriweather", "sans-serif"],
    bodyFontFamily: ["Lato", "sans-serif"],
});

export default typography;

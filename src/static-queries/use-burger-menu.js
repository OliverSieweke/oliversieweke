import { graphql, useStaticQuery } from "gatsby";


export const useBurgerMenu = () => {
    const { burgerMenu } = useStaticQuery(graphql`
        query BurgerMenuQuery {
            burgerMenu: file(relativePath: { eq: "burger-menu.png" }, sourceInstanceName: { eq: "Images" }) {
                publicURL
            }
        }
    `);

    return burgerMenu;
};

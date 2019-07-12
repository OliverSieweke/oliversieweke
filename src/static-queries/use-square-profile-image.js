import { graphql, useStaticQuery } from "gatsby";


export const useSquareProfileImage = () => {
    const { profileImage } = useStaticQuery(graphql`
        query SquareProfileImageQuery {
            profileImage: file(relativePath: { eq: "square-profile.jpg" }, sourceInstanceName: { eq: "Images" }) {
                publicURL
            }
        }
    `);

    return profileImage;
};

import { graphql, useStaticQuery } from "gatsby";


export const useProfileImage = () => {
    const { profileImage } = useStaticQuery(graphql`
        query ProfileImageQuery {
            profileImage: file(relativePath: { eq: "profile.png" }, sourceInstanceName: { eq: "Images" }) {
                publicURL
                childImageSharp {
                    fixed(width: 150) {
                        height
                        width
                        src
                        srcSet
                        tracedSVG
                    }
                }
            }
        }
    `);

    return profileImage;
};

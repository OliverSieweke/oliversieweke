import { graphql, useStaticQuery } from "gatsby";


export const useFlatLayoutImage = () => {
	const { presentationPicture, flatLayout, flatPictures } = useStaticQuery(graphql`
        query KreuzbergImagesQuery {
            presentationPicture: file(relativePath: { eq: "presentation.jpg" }, sourceInstanceName: { eq: "KreuzbergImages" }) {
                publicURL
                dir
                relativePath
                childImageSharp {
                    fixed(width: 400, height :400) {
                        aspectRatio
                        src
                        srcSet
                        tracedSVG
                    }
                }
            }
            flatLayout: file(relativePath: { eq: "flat-layout.jpg" }, sourceInstanceName: { eq: "KreuzbergImages" }) {
                publicURL
                relativePath
                childImageSharp {
                    fluid(maxWidth: 800) {
                        aspectRatio
                        sizes
                        src
                        srcSet
                        tracedSVG
                    }
                }
            }            
            flatPictures: allFile(filter: { relativeDirectory: { eq: "pictures" }, sourceInstanceName: { eq: "KreuzbergImages" } }) {
                edges {
                    node {
                        name
                        publicURL
                        relativePath
                        childImageSharp {
                            fluid(maxWidth: 400) {
		                        aspectRatio
		                        sizes
		                        src
		                        srcSet
		                        tracedSVG
		                    }
                        }
                    }
                }
            }
        }
    `);

	return { presentationPicture, flatLayout, flatPictures: flatPictures.edges.map(({node}) => node) };
};

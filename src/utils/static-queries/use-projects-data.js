import { graphql, useStaticQuery } from "gatsby";

export const useProjectsData = () => {
    const { projects, logos } = useStaticQuery(graphql`
        query ProjectsDataQuery {
            projects: allFile(filter: {name: {eq: "project-info"}, sourceInstanceName: {eq: "Project"}}) {
                ...projectDataFragment
            }
            logos: allFile(filter: {name: {eq: "logo"}, sourceInstanceName: {eq: "Project"}}) {
                edges {
                    node {
                        publicURL
                        relativeDirectory
                    }
                }
            }
        }
        
        fragment projectDataFragment on FileConnection {
            edges {
                node {
                    childJsonData {
                        identifier
                        name
                        type
                        applicationCategory
                        title
                        subtitle
                        headline
                        description
                        technologies {
                            server
                            data
                            hosting
                            frontEnd
                            other
                        }
                        inLanguage
                        url
                        github
                        keywords
                        dateCreated
                        license
                    }
                }
            }
        }
    `);

    return projects.edges.map(({ node: { childJsonData } }) => {
        const logo = logos.edges.find(({ node }) => node.relativeDirectory === childJsonData.identifier);

        return {
            ...childJsonData,
            logoURL: logo.node.publicURL,
        };
    });
};

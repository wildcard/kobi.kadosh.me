// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site, authorPhoto } = useStaticQuery(
    graphql`
      query SiteMetaData {
        authorPhoto: file(relativePath: { eq: "kobi-kadosh-1.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 128, maxHeight: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                facebook
                linkedin
                github
                twitter
                telegram
                instagram
                email
                rss
                vkontakte
                line
                gitlab
                weibo
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
            disqusShortname
          }
        }
      }
    `
  );

  return { ...site.siteMetadata, authorPhoto };
};

export default useSiteMetadata;

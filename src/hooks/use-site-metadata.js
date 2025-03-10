// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site, authorPhoto, gravatar } = useStaticQuery(
    graphql`
      query SiteMetaData {
        gravatar(email: { eq: "kobi@kadosh.me" }) {
          url
        }
        authorPhoto: file(relativePath: { eq: "kobi-kadosh-1.jpeg" }) {
          childImageSharp {
            gatsbyImageData(width: 128, height: 128, layout: CONSTRAINED)
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
                codepen
                youtube
                soundcloud
              }
            }
            menu {
              label
              path
              external
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

  return { ...site.siteMetadata, authorPhoto, gravatar };
};

export default useSiteMetadata;

import * as React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

interface IProps {
  description?: string,
  lang?: string,
  meta?: [],
  keywords?: string[],
  title: string

}

class SEO extends React.Component<IProps, {}> {
  static defaultProps = {
    lang: 'en',
    meta: [],
    keywords: []
  };

  render() {
    const { description, lang, title, keywords, meta } = this.props
    return (
      <StaticQuery
        query={detailsQuery}
        render={data => {
          const metaDescription =
            description || data.site.siteMetadata.description
          return (
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={title}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:title`,
                  content: title,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author,
                },
                {
                  name: `twitter:title`,
                  content: title,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
              ]
                .concat(
                  keywords.length > 0
                    ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                    : []
                )
                .concat(meta)}
            />
          )
        }}
      />
    )
  }

}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

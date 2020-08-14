import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const siteMetadataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(siteMetadataQuery);
  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description
  }
  return (
    <Helmet title={seo.title} titleTemplate={title ? `%s | ${site.siteMetadata.title}` : seo.title}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default SEO;
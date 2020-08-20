import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default function SEO({ title, description }) {
  const { site } = useStaticQuery(query);
  const seo = {
    title: title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title,
    description: description || site.siteMetadata.description,
  };
  return (
    <Helmet
      title={seo.title}
      meta={[
        {
          name: 'description',
          content: seo.description,
        },
        {
          property: 'og:title',
          content: seo.title,
        },
        {
          property: 'og:description',
          content: seo.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ]}
    />
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
};

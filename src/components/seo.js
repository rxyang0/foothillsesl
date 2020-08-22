import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import favicon from '../../static/favicon.png';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        image
        url
      }
    }
  }
`;

export default function SEO({ title, description }) {
  const { site } = useStaticQuery(query);
  const seo = {
    title: title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    image: site.siteMetadata.image,
    url: site.siteMetadata.url,
  };
  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <link rel="icon" href={favicon} />
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
    </Helmet>
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

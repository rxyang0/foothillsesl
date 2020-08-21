import React from 'react';
import PropTypes from 'prop-types';

import Article from './article';

export default function Pane({ edges }) {
  return (
    <>
      {edges.map(({ node }, index) => (
        <Article content={node} altRow={index % 2 !== 0} key={node.title} />
      ))}
    </>
  );
}

Pane.propTypes = {
  edges: PropTypes.arrayOf(PropTypes.shape),
};

Pane.defaultProps = {
  edges: [],
};

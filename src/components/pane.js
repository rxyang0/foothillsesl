import React from 'react';

import Article from './article';

export default ({ edges }) => (
  <section>
    {edges.map(({ node }, index) => (
      <Article content={node} altRow={index % 2 !== 0} />
    ))}
  </section>
);

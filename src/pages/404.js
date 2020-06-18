import React from "react";

import Default from "../layouts/default";
import SEO from "../sections/seo";

const NotFoundPage = () => (
  <Default>
    <SEO title="404 Not found" />
    <div className="container mt-48">
      <h1 className="text-center text-6xl font-bold">404</h1>
      <h2 className="text-center text-3xl">Not Found</h2>
    </div>
  </Default>
);

export default NotFoundPage;

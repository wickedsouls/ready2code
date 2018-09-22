import React from 'react';
import Page from '../layout/Page';

export default () => (
  <Page
    id="not-found"
    title="Not Found"
    description="This is embarrassing."
    noCrawl
    className="NotFound"
  >
    <p>404</p>
  </Page>
);

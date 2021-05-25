import React from 'react';

import '../styles/global.sass';

export default function App({ Component, pageProps }) {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Component {...pageProps} />;
}

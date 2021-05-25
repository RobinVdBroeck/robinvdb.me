import React from "react";

import "../styles/global.sass";

// Setup fontawesome
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(regular, brands, solid);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

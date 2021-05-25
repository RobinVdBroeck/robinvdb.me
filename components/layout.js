import React from "react";
import Nav from "./nav";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title>robinvdb.me</title>
      </Head>
      <Nav />
      <div className="container">{children}</div>
    </React.Fragment>
  );
}

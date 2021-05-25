import React from 'react';
import Head from 'next/head';
import Nav from './nav';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>robinvdb.me</title>
      </Head>
      <Nav />
      <div className="container">{children}</div>
    </>
  );
}

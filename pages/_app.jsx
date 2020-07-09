import React from "react";
import Head from "next/head";

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Price Buddy</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

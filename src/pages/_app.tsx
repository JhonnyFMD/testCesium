import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'cesium/Build/Cesium/Widgets/widgets.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/Cesium.css`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
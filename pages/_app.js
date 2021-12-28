import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Monthly Repls</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="The best repls created and shared on replit, each month!" />
      <meta property="og:title" content="Monthly Repls" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp

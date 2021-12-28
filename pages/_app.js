import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Replit themed website</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="My super cool app description!" />
      <meta property="og:title" content="Replit themed website" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp

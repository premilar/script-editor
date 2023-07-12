import { Html, Head, Main, NextScript } from 'next/document'
import buildspaceLogo from '../assets/buildspace-logo.png';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="AI Script Editor" key="title"/>
        <meta property="og:description" content="build with buildspace" key="description"/>
        <meta
          property="og:image"
          content=buildspaceLogo
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

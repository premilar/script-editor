import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="AI script editor" key="title"/>
        <meta property="og:description" content="build with buildspace" key="description"/>
        <meta
          property="og:image"
          content="https://imgur.com/iGdvKv8"
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

import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Crafted with love by Tamil Monster`}
      />
    </Head>
  )
}

export default Meta

import '@assets/main.css'

import { useEffect } from 'react'

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(
    () => document.addEventListener('contextmenu', e => e.preventDefault()),
    []
  )

  return <Component {...pageProps} />
}

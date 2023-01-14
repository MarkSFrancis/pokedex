import { PageChrome } from '@/views/PageChrome'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageChrome>
      <Component {...pageProps} />
    </PageChrome>
  )
}

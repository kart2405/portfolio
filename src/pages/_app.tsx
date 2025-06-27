import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Karthik Konyala - Portfolio</title>
        <meta name="description" content="Full-stack developer and graduate from Texas Tech University. Specializing in MERN stack, FastAPI, Go, and cloud technologies with expertise in IAM systems and API gateways." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp 
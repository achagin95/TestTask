import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { Layout } from '../components/Layout'


export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Real Estate App</title>
      </Head>
      <section>
        <h2>Real Estate App</h2>
        <p>
          Here are available <Link href="/listings">listings</Link>.
        </p>
      </section>
      <section>
      </section>
    </Layout>
  )
}


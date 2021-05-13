import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'


export default function Home() {
  useEffect(async()=> {
    try {
      const data = await fetch('http://localhost:3000/api/getAll')
      const json = await data.json()
      console.log(json)

      
    } catch (error) {
      
    }
  })

  return (
    <div>
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
    </div>
  )
}


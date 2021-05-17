import {useEffect, useState} from "react";
import Head from 'next/head'
import { Layout } from "../../components/Layout";
import {SortedButton} from '../../components/listing/SortedButton'


export default function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('api/listings')
    .then(res => res.json())
    .then(result => {
      setListings(result);
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Houses for Sale</title>
      </Head>
      <div>
         <div>
           <SortedButton />
         </div>
         <div>

         </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  
  console.log(context)
  console.log(context.params)
  const qwe = 'qwe'

  return {
    props: { qwe },
  }
}


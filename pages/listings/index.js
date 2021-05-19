import {useCallback, useEffect, useState} from "react";
import Head from 'next/head'
import { Layout } from "../../components/Layout";
import {SortedButton} from '../../components/listing/SortedButton'

import {setPage} from '../../redux/actions/pages'
import { useDispatch, useSelector } from "react-redux";

export default function Listings() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const {pageNumber} = useSelector(({setPage}) => setPage)
  console.log(state.setPage.pageNumber)
  console.log(pageNumber)
  //const [numberForJSX, setNumberForJSX] = useState(pageNumber)

  const pageUpHandler = useCallback((number) => {
    dispatch(setPage(number))
  },[])

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
         <div>
           <button onClick={()=>pageUpHandler(pageNumber+1)}>{'>'}</button>
         </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  //поменять на сервер сайд пропс!!!!
  console.log(context)
  console.log(context.params)
  const qwe = 'qwe'

  return {
    props: { qwe },
  }
}


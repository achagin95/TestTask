import { useCallback, useEffect, useMemo, useState } from "react";
import Head from 'next/head'
import { Layout } from "../../components/Layout";
import { SortedButton } from '../../components/listing/SortedButton'
import Items from '../../components/listing/Item'
import style from '../../styles/listings.module.scss'

import { setPage } from '../../redux/actions/pages'
import { useDispatch, useSelector } from "react-redux";
import PaginationButton from "../../components/listing/PaginationButton";
import { useRouter } from "next/router";
import { getHousesCount } from "../../components/dao";

export default function Listings({ pages }) {
    const dispatch = useDispatch()
    const router = useRouter()
    const [items, setItems] = useState([])
    //const state = useSelector(state => state)
    const { pageNumber } = useSelector(({ setPage }) => setPage)
    const { sort } = useSelector(({ setSort }) => setSort)


    useEffect(async () => {
        router.query.que = [pageNumber, sort]
        console.log('useEff', router)
        const data = await fetch(`/api/get20/${router.query.que[0]}/${router.query.que[1]}`)
        const json4k = await data.json()
        setItems(json4k)

    }, [pageNumber, sort])

    console.log(router.query.params[0])
    //console.log(state.setPage.pageNumber)
    //console.log(pageNumber)
    //const [numberForJSX, setNumberForJSX] = useState(pageNumber)

    console.log('render: ', pageNumber)

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
                    <ul className={style.ho}>
                        {items.map((item, index) => {
                            return <Items key={item.id} item={item} />
                        })}
                    </ul>
                </div>
                <div>
                    <PaginationButton count={pages} />
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const count = await getHousesCount()
    const pages = count / 20

    return {
        props: { pages },
    }
}

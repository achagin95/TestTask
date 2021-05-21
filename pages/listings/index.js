import { useEffect, useState } from "react";
import Head from 'next/head'
import { Layout } from "../../components/Layout";
import { SortedButton } from '../../components/listing/SortedButton'
import Items from '../../components/listing/Item'
import style from '../../styles/listings.module.scss'

import { useSelector } from "react-redux";
import PaginationButton from "../../components/listing/PaginationButton";
import { useRouter } from "next/router";
import { getHousesCount } from "../../components/dao";

export default function Listings({ pages }) {
    const router = useRouter()
    const [items, setItems] = useState([])
    const { pageNumber } = useSelector(({ setPage }) => setPage)
    const { sort } = useSelector(({ setSort }) => setSort)

    useEffect(async () => {
        router.query.que = [pageNumber, sort]
        const data = await fetch(`/api/get20/${router.query.que[0]}/${router.query.que[1]}`)
        const json4k = await data.json()
        setItems(json4k)
    }, [pageNumber, sort])

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

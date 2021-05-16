import { useRouter } from 'next/router'
import { useState } from 'react'
import { getHouseById } from '../../../components/dao'
import { Layout } from '../../../components/Layout'
import style from '../../../styles/detail.module.scss'

export default function Detail({ houseProps }) {
    const router = useRouter()
    const home = JSON.parse(houseProps)
    const { id, product, address, builder, price, phone, square,
        hasBasement, description, garage, bedrooms, type,
        amenities, images } = home
    console.log(home)
    const [imageId, setImageId] = useState(0)
    //добавить состояния для картинок, позже перенсти их в редакс

    const onClickHandlerDown = (id) => {
        id - 1 < 0 ? setImageId(images.length - 1) : setImageId(id - 1)
    }

    const onClickHandlerUp = (id) => {
        id + 1 > images.length - 1 ? setImageId(0) : setImageId(id + 1)
    }


    return (
        <Layout>
            <div className={style.grid}>
                <header className={style.header}>
                    <div>
                        <strong>Product:</strong> {product}
                    </div>
                    <div>
                        <strong>Builder:</strong> {builder}
                    </div>
                </header>
                <section className={`${style.im} ${style.wl}`}>

                    <button onClick={() => onClickHandlerDown(imageId)}>{"<"}</button>
                    <img
                        id={images[imageId].id}
                        src={`${images[imageId].imageUrl}`}
                        onClick={(event) => console.log(event.target)}
                    />
                    <span onClick={() => onClickHandlerUp(imageId)}>{">"}</span>
                </section>
                <section className={style.detailRight}>
                    qwe
                </section>
                <section className={style.detailRight2}>
                    qwe
                </section>
                <section className={style.detailUnder}>
                    qwe
                </section>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const data = await getHouseById(context.params.id)
    const houseProps = JSON.stringify(data)

    return {
        props: { houseProps },
    }
}
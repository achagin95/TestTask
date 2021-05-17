import { useRouter } from 'next/router'
import { useState } from 'react'
import { getHouseById } from '../../../components/dao'
import { Layout } from '../../../components/Layout'
import style from '../../../styles/detail.module.scss'

export default function Detail({ houseProps }) {
    const router = useRouter()
    const home = JSON.parse(houseProps)
    const { id, product, addressStreet, addressCity, addressState,
        addressZip, builder, price, phone, square,
        hasBasement, description, garage, bedrooms, type,
        amenities, images } = home
    console.log(home)
    console.log('render')
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

                    <button onClick={() => onClickHandlerDown(imageId)} disabled={images.length<=1}>{"<"}</button>
                    <img
                        id={images[imageId].id}
                        src={`${images[imageId].imageUrl}`}
                        onClick={(event) => console.log(event.target)}
                    />
                    <button onClick={() => onClickHandlerUp(imageId)} disabled={images.length<=1}>{">"}</button>
                </section>
                <section className={style.detailRight}>
                    <ul>
                        <li><strong>Zip: </strong>{addressZip}</li>
                        <li><strong>State: </strong>{addressState}</li>
                        <li><strong>City: </strong>{addressCity}</li>
                        <li><strong>Street: </strong>{addressStreet}</li>
                    </ul>
                    <ul> Amenities:
                        {amenities.length>0 ? amenities.map((item, id) => {
                            return <li key={id} className={style.m5}><strong>{item.amenitiesName}</strong></li>
                        }) : <li>This item hasn't amenities</li>}
                    </ul>
                </section>
                <section className={style.detailRight2}>
                    <ul>
                        <li><strong>Square: </strong>{square} Square foots</li>
                        <li><strong>Basement: </strong>{hasBasement? 'yes' : 'No'}</li>
                        <li><strong>garage: </strong>{garage}</li>
                        <li><strong>bedrooms: </strong>{bedrooms}</li>
                        <li><strong>type: </strong>{type}</li>
                    </ul>
                </section>
                <section className={style.detailUnder}>
                    <div><strong>Price: </strong><strong className={style.red}>{price} $</strong></div>
                    <div><strong>Phone: </strong>{phone}</div>
                </section>
                <section className={style.detailUnderRight}>
                     <button>description</button>
                     //добавить скрытое описание, которое появляется при
                     //нажатии на кнопку
                     <p>Секцию с картинкой убрать в отдельный компонент</p>
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
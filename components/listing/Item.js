import { useRouter } from "next/router"

export default function Items({ item }) {
    const router = useRouter()
    const rout = () => {
        router.push({
            pathname: '/listings/detail/[id]',
            query: {id: item.id}
        })
    }

    return (
        <li onClick={rout}>id: {item.id} product: {item.product} price: {item.price} square: {item.square}</li>
    )
}
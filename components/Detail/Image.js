import React, { useState } from "react";
import style from '../../styles/detail.module.scss'

export default function Image({ images }) {
    const [imageId, setImageId] = useState(0)

    const onClickHandlerDown = (id) => {
        id - 1 < 0 ? setImageId(images.length - 1) : setImageId(id - 1)
    }

    const onClickHandlerUp = (id) => {
        id + 1 > images.length - 1 ? setImageId(0) : setImageId(id + 1)
    }

    return (
        <>
            <button onClick={() => onClickHandlerDown(imageId)} disabled={images.length <= 1}>{"<"}</button>
            <img
                id={images[imageId].id}
                src={`${images[imageId].imageUrl}`}
                onClick={(event) => console.log(event.target)}
            />
            <button onClick={() => onClickHandlerUp(imageId)} disabled={images.length <= 1}>{">"}</button>
        </>
    )
}
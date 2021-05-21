import { useEffect, useRef, useState } from "react";
import style from '../../styles/detail.module.scss'

export function Description({ description }) {

    const [visible, setVisible] = useState(false)
    const descrRef = useRef()

    const toggleVisible = () => {
        setVisible(!visible)
    }

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath())
        if (!path.includes(descrRef.current)) {
            setVisible(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    })

    return (
        <div ref={descrRef}>
            <button onClick={toggleVisible}>description</button>
            {visible &&
                <div className={style.n}>
                    {description}
                </div>}
        </div>
    )

}
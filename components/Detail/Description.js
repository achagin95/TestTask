import { useEffect, useRef, useState } from "react";

export function Description({ description }) {

    const [visible, setVisible] = useState(false)
    const descrRef = useRef()

    const toggleVisible = () => {
        setVisible(!visible)
    }

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath())
        console.log(path.includes(descrRef.current))
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
                <div>
                    {description}
                </div>}
        </div>
    )

}
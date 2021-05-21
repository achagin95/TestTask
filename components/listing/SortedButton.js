import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from '../../styles/listings.module.scss'

import { setSort } from '../../redux/actions/sort'

const sortBy = ['id', 'price_up', 'price_down', 'square']


export function SortedButton() {

    const { sort } = useSelector(({ setSort }) => setSort)
    const [visible, setVisible] = useState(false)
    const descrRef = useRef()
    const dispatch = useDispatch()

    const toggleVisible = () => {
        setVisible(!visible)
    }

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath())
        if (!path.includes(descrRef.current)) {
            setVisible(false)
        }
    }
    const onSelectCategory = useCallback((e) => {
        dispatch(setSort(e.target.innerText))
        setVisible(false)
    },[])

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    })

    return (
        <div>
            <div ref={descrRef}>
                <button onClick={toggleVisible}>Sort</button>
                {visible &&
                    <div className={`${style.h} ${style.ho}`} >
                        <ul>
                            {sortBy.map((item, index) => {
                                return <li key={index} onClick={onSelectCategory}>{item}</li>
                            })}
                        </ul>
                    </div>}
            </div>
        </div>
    )
}
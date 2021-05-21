import { useCallback, useEffect, useState } from "react";
import { setPage } from '../../redux/actions/pages'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function PaginationButton({count}) {
    const router = useRouter()
    const dispatch = useDispatch()
    const { pageNumber } = useSelector(({ setPage }) => setPage)
    //console.log('router PAgination',router)
    

    const pageToggleHandler = useCallback((number) => {
        dispatch(setPage(number))
      }, [])

    return (
        <div>
            <button onClick={() => pageToggleHandler(pageNumber - 1)} disabled={pageNumber <= 1}>{'<'}</button>
            {pageNumber > 3 && <button onClick={() => pageToggleHandler(1)}> 1 </button>}
            {pageNumber > 3 && <span> ... </span>}
            {pageNumber > 2 && <button onClick={() => pageToggleHandler(pageNumber - 2)}> {pageNumber - 2} </button>}
            {pageNumber > 1 && <button onClick={() => pageToggleHandler(pageNumber - 1)}> {pageNumber - 1} </button>}
            <span><strong> {pageNumber} </strong></span>
            {pageNumber <= count - 2 && <button onClick={() => pageToggleHandler(pageNumber + 1)}> {pageNumber + 1} </button>}
            {pageNumber <= count - 2 && <button onClick={() => pageToggleHandler(pageNumber + 2)}> {pageNumber + 2} </button>}
            {pageNumber <= count - 2 && <span> ... </span>}
            {pageNumber <= count - 2 && <button onClick={() => pageToggleHandler(count)}> {count} </button>}
            <button onClick={() => pageToggleHandler(pageNumber + 1)} disabled={pageNumber===count}>{'>'}</button>
        </div>
    )
}

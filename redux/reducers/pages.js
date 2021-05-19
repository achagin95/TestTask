const initialState = {
    pageNumber: 1,
}

const setPage = (state = initialState, action) => {
    if (action.type === 'SET_PAGE') {
        console.log(action)
        return {
            ...state,
            pageNumber: action.payload,
        }
    }
    return state
}

export default setPage
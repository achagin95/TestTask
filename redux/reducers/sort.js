const initialState = {
    sort: 'id',
}

const setSort = (state = initialState, action) => {
    if (action.type === 'SET_SORT') {
        return {
            ...state,
            sort: action.payload,
        }
    }
    return state
}

export default setSort
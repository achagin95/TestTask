import {combineReducers} from 'redux'

// all imports (iimport a from './file1')
import setPage from './pages'
import setSort from './sort'

const rootReducer = combineReducers({
    setPage,
    setSort,
})

export default rootReducer
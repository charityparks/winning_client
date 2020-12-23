import { combineReducers } from 'redux'
import { listsReducer } from './listsReducer'
import { itemsReducer } from './itemsReducer'

export const rootReducer = combineReducers({
    lists: listsReducer,
    items: itemsReducer
});
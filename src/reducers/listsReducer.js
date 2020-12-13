export const listsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LISTS':
            return action.lists
        case 'ADD_LIST':
            return [...state, action.list]
        default:
            return state
    }
}
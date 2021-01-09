export const listsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LISTS':
            return action.lists
        case 'ADD_LIST':
            return [...state, action.list]
        case 'DELETE_LIST':
            return state.filter(i => i.id !== action.list.id)

        default:
            return state
    }
}
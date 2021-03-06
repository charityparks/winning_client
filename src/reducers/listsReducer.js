export const listsReducer = (state = {lists: []}, action) => {
    switch (action.type) {
        case 'FETCH_LISTS':
            return {...state, lists: action.lists.data}
        case 'FETCH_LIST':
            return {...state, lists: action.payload}
        case 'ADD_LIST':    
            return { ...state, lists: [...state.lists, action.list.data] }
        case 'ADD_ITEM_TO_LIST':            
            return { ...state, lists: {...state.lists, attributes: {...state.lists.attributes, items: [...state.lists.attributes.items, action.payload]} }}
        case 'DELETE_LIST':
            return {...state, lists: state.filter(i => i.id !== action.list.id)}

        default:
            return state
    }
}
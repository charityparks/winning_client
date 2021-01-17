export const itemsReducer = (state = {items: []}, action) => {
    switch(action.type){
        case 'FETCH_ITEMS':
            return [...state, action.items]
        case 'ADD_ITEM':
            return {...state, items: [...state.items, action.payload.data.attributes]}
        case 'DELETE_ITEM':
            return state.items.filter(i => i.id !== action.item.id)
    
        default:
            return state
    }
}

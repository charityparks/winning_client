export const itemsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ITEMS':
            return [...state, action.items]
        case 'ADD_ITEM':
            return {...state, items: [...state.items, action.items]}
        case 'DELETE_ITEM':
            debugger
            return state.items.filter(i => i.id !== action.item.id)

        default:
            return state
    }
}
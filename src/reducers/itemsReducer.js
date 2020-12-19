export const itemsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ITEMS':
            return action.items
            case 'ADD_ITEM':
                return [...state, action.item]
        default:
            return state
    }
}
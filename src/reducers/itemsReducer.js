export const itemsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ITEMS':
            return action.items
        case 'ADD_ITEM':
            console.log(state);
            return [...state, action.item]
        case 'DELETE_ITEM':
            return state.filter(i => i.id !== action.item.id)

        default:
            return state
    }
}
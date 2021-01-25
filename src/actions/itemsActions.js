// create an action that will fetch all lists from the api
const BASE_URL = "http://localhost:3001"

export const fetchItems = () => {  
    return (dispatch) => {
        fetch(BASE_URL + "/items")
        .then(resp => resp.json())
        .then(items => dispatch({ type: 'FETCH_ITEMS', items }))
    }
}

export const addItem = (item, id) => {
    return dispatch => {
        fetch(BASE_URL + `/lists/${id}/items`, {   
            method: 'POST',
            body: JSON.stringify(item),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(item => {            
            dispatch({ type: 'ADD_ITEM_TO_LIST', payload: item.data.attributes})
        })
    }
}
// export const deleteItem = item => {
//     return dispatch => {
//         fetch(BASE_URL + `/lists/${id}/items`, {
//             method: 'DETETE',
//         })
//         type: 'DELETE_ITEM', 
//         item
//     }
// }
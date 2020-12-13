// create an action that will fetch all lists from the api
const BASE_URL = "http://localhost:3001/lists/:id/items/"

export const fetchItems = () => {
    return (dispatch) => {
        fetch(BASE_URL)
        .then(resp => resp.json())
        .then(items => dispatch({ type: 'FETCH_ITEMS', items }))
    }
}

export const addItem = (item) => {
    return dispatch => {
        fetch(`${BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(item => dispatch({ type: 'ADD_ITEM', payload: item }))
    }
}
export const deleteItem = item => {
    return {
        type: 'DELETE_ITEM', 
        item
    }
}
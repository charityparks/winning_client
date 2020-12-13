// create an action that will fetch all lists from the api
export const fetchLists = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3001/lists')
        .then(resp => resp.json())
        .then(lists => dispatch({ type: 'FETCH_LISTS', lists }))
    }
}

export const addList = (list) => {
    return dispatch => {
        fetch('http://127.0.0.1:3001/lists', {
            method: 'POST',
            body: JSON.stringify(list),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(list => dispatch({ type: 'ADD_LIST', payload: list}))
    }
}








// export const fetchCategories = () => {
//     return dispatch => {
//         fetch('http://localhost:3090/categories')
//         .then(resp => resp.json())
//         .then(categories => dispatch({ type: 'FETCH_CATEGORIES', categories }))
//     }
// }

// export const addCategory = category => {
//     return dispatch => {
//         fetch('http://localhost:3090/categories', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json" 
//             },
//             body: JSON.stringify(category)
//         })
//         .then(resp => resp.json())
//         .then(category => dispatch({ type: 'ADD_CATEGORY', category}))
//     }
// }
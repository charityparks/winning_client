// create an action that will fetch all lists from the api
export const fetchLists = () => {
    return (dispatch) => {
        return fetch('http://127.0.0.1:3001/lists', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"}
        })
        .then(resp => resp.json())
        .then(lists => dispatch({ type: 'FETCH_LISTS', lists }))
    }
}
export const fetchList = (id) => async (dispatch) => {
    //   const resp = await fetch(`http://127.0.0.1:3001/lists/${id}`)
    //     const list = await resp.json()
    //     dispatch({ type: 'FETCH_LIST', payload: list.data })
       fetch(`http://127.0.0.1:3001/lists/${id}`)
        .then(resp => resp.json())
        .then(list => dispatch({ type: 'FETCH_LIST', payload: list.data }))
    
    }


export const addList = (list) => {
    return dispatch => {
        return fetch('http://127.0.0.1:3001/lists', {
            method: 'POST',
            body: JSON.stringify(list),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(list => dispatch({ type: 'ADD_LIST', list}))
    }
}









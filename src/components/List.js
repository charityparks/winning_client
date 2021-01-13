import React from 'react'
import { connect } from 'react-redux'
// import ItemsContainer from '../containers/ItemsContainer'
import ListItems from '../containers/ListItems'

const List = (props) => {
    return (
        <div>
            <h1>This is a list</h1>
            {props.lists.data && props.lists.data.map(list =>
                <ul key={list.id}>
                    <b>{list.attributes.title}</b><br/>

                    {list.attributes.items.map(item => <ul key={item.id}><h6>{item.name}</h6></ul>)}
                </ul>
            )}
            <ListItems />
        </div>         
    )
}    
// let itemsList = items.data.filter(i => i.list_id === listID) 
// list.match.params.id

const mapStateToProps = (state) => {
    // return {lists: state.lists}
    return {lists: state.lists.filter}

}

export default connect(mapStateToProps)(List);


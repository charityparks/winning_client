import React from 'react'
import { connect } from 'react-redux'
import ItemsContainer from '../containers/ItemsContainer'
import ListItems from '../containers/ListItems'

const List = (props) => {
const list = props.lists.filter(l => l.id == props.match.params.id)
// console.log(list)
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
            <ItemsContainer />
        </div>         
    )
}    

const mapStateToProps = (state) => {
    // return {lists: state.lists}
    return {lists: state.lists.data}

}

export default connect(mapStateToProps)(List);


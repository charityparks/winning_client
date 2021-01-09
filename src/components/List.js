import React from 'react'
// import ItemsForm from './ItemsForm'
import ListItems from '../containers/ListItems'
import { connect } from 'react-redux'
import ItemsContainer from '../containers/ItemsContainer'
import ItemsForm from './ItemsForm'


const List = (props) => {
    return (
        <div>
            <h1>This is a list</h1>
            {props.lists.data && props.lists.data.map(list =>
                                        
                // {`/list/${list.id}/items`}
                <ul key={list.id}>
                    <b>{list.attributes.title}</b><br/>
                    
                    {list.attributes.items.map(item => <ul key={item.id}><h6>{item.name}</h6></ul>)}
                </ul>
            )}
            <ItemsContainer />
            <ListItems />
            <ItemsForm />
        </div>
                
    )
}    
const mapStateToProps = (state) => {
    return {list: state.list}
}

export default connect(mapStateToProps, null)(List);


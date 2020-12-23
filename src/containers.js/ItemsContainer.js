import React, { Component } from 'react'
import Item from '../components/Item'
import ItemsForm from '../components/ItemsForm'
import ListItems from './ListItems'
// import { connect } from 'react-redux'
// import { fetchItems, deleteItem } from '../actions/itemsActions'


class ItemsContainer extends Component {
    state={
        items: [],
        item: ""
    }

    handleOnClick = (event) => {
        this.setState({
            item: event.target.id
        })
    }
    render() { 
        const items = this.state.items.map((items, i) => {
            return <Item key={i} item={items} handleClick={this.handleOnClick} />

        })
        return (
            <div>
                <h3>List Items!</h3>
                <br/>
                {items}
                <ItemsForm />
                <ListItems />

            </div>
        )
    }
}


export default ItemsContainer

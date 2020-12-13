import React, { Component } from 'react'
import Item from '../components/Item'

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
                {/* <ItemsForm /> */}

            </div>
        )
    }
}


export default ItemsContainer

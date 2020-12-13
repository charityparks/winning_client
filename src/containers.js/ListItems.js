import React, { Component } from 'react'
import ItemsForm from '../components/ItemsForm'


class ListItems extends Component {
    render() {
        return (
            <div>
                <h2>Items on my list</h2>
                <ListItems />
                <ItemsForm />
            </div>
        )
    }
}

export default ListItems

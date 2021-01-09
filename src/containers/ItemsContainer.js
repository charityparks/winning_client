import React, { Component } from 'react'
import ItemsForm from '../components/ItemsForm'
import ListItems from './ListItems'
import { connect } from 'react-redux'
import { fetchItems, deleteItem } from '../actions/itemsActions'


class ItemsContainer extends Component {

    componentDidMount() {
        this.props.fetchItems()
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <ListItems listID={this.props.list.id} items={this.props.items} deleteItem={this.props.deleteItem} />
                <ItemsForm listID={this.props.list.id} />
                <ItemsForm />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
   return {items: state.items}
}

export default connect(mapStateToProps, { fetchItems, deleteItem })(ItemsContainer);
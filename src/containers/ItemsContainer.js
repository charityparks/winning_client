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
        return (
            <div>
                <ListItems listID={this.props.list.id} 
                           items={this.props.items} 
                           deleteItem={this.props.deleteItem} />

                <ItemsForm listID={this.props.list.id} />
                
                <ItemsForm {...this.props.list} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
   return {items: state.items}
}

export default connect(mapStateToProps, { fetchItems, deleteItem })(ItemsContainer);
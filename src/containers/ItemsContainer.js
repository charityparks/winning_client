// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { fetchItems, deleteItem, addItem } from '../actions/itemsActions'
// import ListsContainer from './ListsContainer'
// import List from './ListsContainer'

// class ItemsContainer extends Component {
//     componentDidMount() {
//         this.props.fetchItems()
//     }
//     render() {
//         return (
//             <div>
//                 <List />
//                 <ListsContainer />
//                 {/* <ListItems listID={this.props.list.id} 
//                            items={this.props.items} 
//                            deleteItem={this.props.deleteItem} 
//                            addItem={this.props.addItems} /> */}

//                 {/* <ItemsForm listID={this.props.list.id} /> */}
                               
//                 {/* <ItemsForm {...this.props.list} /> */}
//             </div>
//         );
//     }
// }
// const mapStateToProps = (state) => {
//    return {items: state.items}
// }
// export default connect(mapStateToProps, { fetchItems, deleteItem, addItem })(ItemsContainer);
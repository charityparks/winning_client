import React from 'react';
import ItemsForm from '../components/ItemsForm'
import { connect } from 'react-redux'
import ItemsContainer from './ItemsContainer';
import { fetchItems } from '../actions/itemsActions'


const ListItems = ({ listID, items, deleteItem }) => {
    
    // let itemsList = items.data.filter(i => i.list_id === listID)
let itemsList = []
    return (
        <div>
            <ItemsForm />
            <ItemsContainer items={items} />
            
            {itemsList.map(item => {
                return (<li key={item.id}>{item.name} <button onClick={() => deleteItem(item)}>✓</button></li>)
            })}  
        </div>
    );
};
const mapStateToProps = state => {
    return { items: state.items }
}
export default connect(mapStateToProps, { fetchItems })(ListItems);



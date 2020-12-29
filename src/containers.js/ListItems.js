import React from 'react';
import ItemsForm from '../components/ItemsForm'
import { connect } from 'react-redux'


const ListItems = (props) => {
console.log(props)
    let itemsList = items.filter(i => i.list_id === listID)

    return (
        <div>
            <ItemsForm />
            {/* {itemsList.map(item => {
                return (<p key={item.id}>{item.name} <button onClick={() => deleteItem(item)}>✓</button></p>)
            })}   */}
        </div>
    );
};

export default ListItems;


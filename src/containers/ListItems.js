import React from 'react';
import ItemsForm from '../components/ItemsForm'
import { connect } from 'react-redux'
// import ItemsContainer from './ItemsContainer';


const ListItems = ({ listID, items, deleteItem }) => {
    // console.log(listID)
    let itemsList = items.filter(i => i.list_id === listID)

    return (
        <div>
            <ItemsForm />
            {/* <ItemsContainer items={items} /> */}
            {itemsList.map(item => {
                return (<p key={item.id}>{item.name} <button onClick={() => deleteItem(item)}>✓</button></p>)
            })}  
        </div>
    );
};
const mapStateToProps = state => {
    return { items: state.items }
}

export default connect(mapStateToProps)(ListItems);



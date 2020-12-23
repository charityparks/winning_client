import React from 'react';

const ListItems = ({ listID, items, deleteItem }) => {
    let itemsList = items.filter(i => i.list_id === listID)

    return (
        <div>
            {itemsList.map(item => {
                return (<p key={item.id}>{item.name} <button onClick={() => deleteItem(item)}>✓</button></p>)
            })}  
        </div>
    );
};

export default ListItems;




// import ItemsForm from '../components/ItemsForm'


// class ListItems extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Items on my list</h2>
//                 <ListItems />
//                 <ItemsForm />
//             </div>
//         )
//     }
// }

// export default ListItems

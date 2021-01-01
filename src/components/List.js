import React from 'react'
// import Item from './Item'
// import ItemsForm from './ItemsForm'
import ListItems from '../containers.js/ListItems'

const List = () => {
    return (
            <div>
                {/* <Item />
                <ItemsForm /> */}
                <ListItems />
            </div>

    )
}

export default List


// Alternative

// import React from 'react';
// import { Link } from 'react-router-dom';

// class List extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>Please choose a list.</p>
//                 <ul>
//                     {/* !!!!! NOt sure what to do here!!! */}
//                         <li><Link to={`/list/${this.props.id}`}>Items on List</Link></li>
//                 </ul>
//             </div>
//         );
//     }
// }

// export default List;

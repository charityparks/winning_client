// import React from 'react';
// import { connect } from 'react-redux'
// import List from './List'

// const ListOfLists = ({ lists }) => {
//     return (
//         <div>
//             <h1>Winning Lists!</h1>
//             {lists.map(list =>
//                 <ul key={list.id}>
//                     <b>{list.title}</b><br></br><i>Description:{list.description}</i>
//                     <List id={list.id} />
//                 </ul>
//             )}
//         </div>
//     );
// };
// const mapStateToProps = state => {
//     return { lists: state.lists }
// }
// export default connect(mapStateToProps)(ListOfLists);
// // stateless components
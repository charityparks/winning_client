import React from 'react';
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
// import List from './List'

const ListOfLists = ({ lists }) => {
    const allLists = lists.map((list, index) => {
        return <div key={list.id} className="allList">
            <Link 
                to={`/lists/${list.id}`}>
                <h2>{list.title}</h2></Link>
                <h4>{list.description}</h4>
        </div>
    })
    return (
        <div>{allLists}</div>
    );
};
   

export default ListOfLists;
// const mapStateToProps = state => {
//     return { lists: state.lists }


// export default connect(mapStateToProps)(ListOfLists);

// stateless components
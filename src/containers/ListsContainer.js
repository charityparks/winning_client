import React, { Component } from 'react';
import ListsForm from '../components/ListsForm'
import Lists from '../components/Lists'
import ItemsForm from '../components/ItemsForm';

class ListsContainer extends Component {
    
    render() {
        return (
            <div>
                <ListsForm />
                <Lists />
                <ItemsForm />

            </div>
        );
    }
}
export default ListsContainer
//Container component
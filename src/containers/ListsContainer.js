import React, { Component } from 'react';
import ListsForm from '../components/ListsForm'
import Lists from '../components/Lists'

import ListItems from './ListItems';

class ListsContainer extends Component {
    
    render() {
        return (
            <div>
                <ListsForm />
                <Lists />
                

            </div>
        );
    }
}
export default ListsContainer
//Container component
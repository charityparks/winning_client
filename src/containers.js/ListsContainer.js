import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchLists } from '../actions/listsActions'
import ListsForm from '../components/ListsForm'

class ListsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchLists()
    }
    render() {
        return (
            <div>
                <ListsForm />
            </div>
        );
    }
}
export default connect(null, { fetchLists })(ListsContainer);

//Container component
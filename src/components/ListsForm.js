import React, { Component } from 'react'
import { addList } from '../actions/listsActions'
import { connect } from 'react-redux'

class ListsForm extends Component {

    state = {
        title: '',
        description: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addList(this.state);
         this.setState({
             title: '',
             description:''
         })
    }

    // resetForm = () => {
    //     this.setState({
    //         name: "", 
    //         list_id: this.props.listID
    //     })
    // }

    render() {
        return (
        
        <form onSubmit={this.handleSubmit}>
            <br></br>
            <br></br>
            <label>List Title:</label>
            <input type='text' value={this.state.title} onChange={this.handleChange} name='title'/><br></br><br></br>

            <label>List Description:</label>
            <input type='text' value={this.state.description} onChange={this.handleChange} name='description'/><br></br><br></br>

            <input type='submit' value='Create List' />
        </form>
      
        )
    }
   
}

export default connect(null, { addList })(ListsForm);

//local state is component state
//this is a container or presentational component?
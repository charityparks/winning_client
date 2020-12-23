import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addItem } from '../actions/itemsActions'

class ItemsForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "", 
            list_id: this.props.listID
        }
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const item = {
            name: this.state.name,
            list_id: this.props.listID
        }
        this.props.addItem(item)
        this.resetForm()
    }

    resetForm = () => {
        this.setState({
            name: "", 
            list_id: this.props.listID
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        placeholder="New item"
                        name="name"
                        onChange={this.handleOnChange}
                        value={this.state.name}
                    />
                    <br />
                    <input type="submit" value="Add new item"/>
                </form>
                <ItemsForm />
            </div>
        
        );
    }
}

export default connect(null, { addItem })(ItemsForm);
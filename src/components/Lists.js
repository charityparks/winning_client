import React, { Component } from 'react'
import { fetchLists } from '../actions/listsActions'
import { connect } from 'react-redux'

export class Lists extends Component {
    componentDidMount() {
        this.props.fetchLists()
    }
    render() {
        return (
            <div>
                <h1>Winning Lists!</h1>
                   {this.props.lists.map(list =>
                    <ul key={list.id}>
                        <b>{list.title}</b><br></br><i>
                        Description:{list.description}</i>
                    </ul>
                    )}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return { lists: state.lists }
}
export default connect(mapStateToProps, { fetchLists })(Lists);
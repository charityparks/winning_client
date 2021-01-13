import React, { Component } from 'react'
import { fetchLists } from '../actions/listsActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Lists extends Component {
    componentDidMount() {
        this.props.fetchLists()
    }
    render() {
        return (
            <div>
                {this.props.lists.data && this.props.lists.data.map(list =>
                                        
                    <Link to={`/list/${list.id}/items`}><ul key={list.id}>
                              <b>{list.attributes.title}</b><br/><i>
                             Description:{list.attributes.description}</i><br></br>
                             {/* {list.attributes.items.map(item => <ul key={item.id}><h6>{item.name}</h6></ul>)} */}

                    </ul>
                    </Link>

                )}
            </div>  
        ) 
    } 
}     
const mapStateToProps = state => {
    return {lists: state.lists} 
}
export default connect(mapStateToProps, { fetchLists })(Lists)
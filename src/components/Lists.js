import React, { Component } from 'react'
import { fetchLists } from '../actions/listsActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Lists extends Component {
    componentDidMount() {
        this.props.fetchLists()
    }
    render() {  
        // console.log(this.props);      
        return (
            <div>
                {this.props.lists.length > 0 && this.props.lists.map(list =>
                                        
                    <ul key={list.id}>
                        <li>
                            <Link key={list.id} to={`/list/${list.id}`}> <b>{list.attributes.title}</b><br/><i>
                             Description:{list.attributes.description}</i> 
                              </Link><button>Delete</button>
                        </li> 
                    </ul>
                )}
            </div>  
           
            
        ) 
    } 
}     
const mapStateToProps = ({lists}) => {  
    
    return {lists: lists.lists} 
}
export default connect(mapStateToProps, { fetchLists })(Lists)
import React, { Component } from 'react'
import { fetchLists } from '../actions/listsActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Lists extends Component {
    componentDidMount() {
        this.props.fetchLists()
    }
    render() {  
        console.log(this.props);      
        return (
            <div>
                {this.props.lists.length > 0 && this.props.lists.map(list =>
                                        
                    <Link key={list.id} to={`/list/${list.id}`}><ul key={list.id}>
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
const mapStateToProps = ({lists}) => {  
    
    return {lists: lists.lists} 
}
export default connect(mapStateToProps, { fetchLists })(Lists)
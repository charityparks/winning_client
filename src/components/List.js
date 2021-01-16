import React from 'react'
import { connect } from 'react-redux'
// import ItemsContainer from '../containers/ItemsContainer'
// import ListItems from '../containers/ListItems'
import { fetchList } from '../actions/listsActions'
import ItemsForm from '../components/ItemsForm';
class List extends React.Component {
// const list = props.lists.data.filter(l => l.id === props.match.params.id)
      
componentDidMount() {
        this.props.fetchList(this.props.match.params.id)
    }
    render() {    
        
        const list = this.props.lists        
        if (list.id) {
    return (
        
        <div>
             {
                <ul key={list.id}>
                    <h1><b>{list.attributes.title}</b></h1>
                    {list.attributes.items.map(item => <ul key={item.id}><li>{item.name} <button>Delete</button></li>  </ul>)}
                </ul>
             }
    
        <ItemsForm listID={this.props.match.params.id}/>  
        </div> 
              
    )} else
    return (<div>Something went wrong</div>)
}
}    

const mapStateToProps = (state) => {
    return {lists: state.lists.lists}
}

export default connect(mapStateToProps, {fetchList})(List);


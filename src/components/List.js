import React from 'react'
import { connect } from 'react-redux'
import ItemsContainer from '../containers/ItemsContainer'
import ListItems from '../containers/ListItems'
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
            <h1>This is a list</h1>
             {
                 <ul key={list.id}>
                     <b>{list.attributes.title}</b><br/>

                     {list.attributes.items.map(item => <ul key={item.id}><h6>{item.name}</h6></ul>)}
                 </ul>
             }
    
        <ItemsForm listID={this.props.match.params.id}/>  
        </div> 
              
    )} else
    return (<div>hello</div>)
}
}    

const mapStateToProps = (state) => {
    // return {}

    
    return {lists: state.lists.lists}

}

export default connect(mapStateToProps, {fetchList})(List);


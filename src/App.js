import React from 'react';
import './App.css';
import ListsContainer from './containers/ListsContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import ListOfLists from './components/ListOfLists'
import Navigation from './components/Navigation'
import ItemsContainer from './containers/ItemsContainer'
import ListItems from './containers/ListItems'
import ListsForm from './components/ListsForm';
import ItemsForm from './components/ItemsForm';


function App () {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/items" component={ItemsContainer} />
            <Route exact path="/lists" component={ListOfLists} />
            <Route exact path="/lists/:id" component={ListItems} />
            {/* <Route exact path="/lists/:id/items" component={ItemsForm} /> */}


          </Switch>
          <ListsContainer />
        </div>
      </Router>
    );
};

export default App;

// stateless components
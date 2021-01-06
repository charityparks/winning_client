import React from 'react';
import './App.css';
import ListsContainer from './containers/ListsContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe'
// import ListsForm from './components/ListsForm';
// import ItemsForm from './components/ItemsForm'
import List from './components/List'


function App () {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lists" component={ListsContainer} />
            <Route exact path="/aboutMe" component={AboutMe} />
            <Route exact path="/list/:id/items" component={List} /> 
            {/* <Route exact path="/list" component={List} /> */}
          </Switch>
          
          
        </div>
      </Router>
    );
};

export default App;

// stateless components
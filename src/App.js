import React from 'react';
import './App.css';
import ListsContainer from './containers.js/ListsContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe'


function App () {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lists" component={ListsContainer} />
            <Route exact path="/aboutMe" component={AboutMe} />
          </Switch>
          {/* <ListsContainer /> */}
          
          
        </div>
      </Router>
    );
};

export default App;

// stateless components
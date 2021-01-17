import React from 'react';
import './App.css';
import ListsContainer from './containers/ListsContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe'
import List from './components/List'
import PopularLists from './components/PopularLists'


function App () {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lists" component={ListsContainer} />
            <Route exact path="/aboutMe" component={AboutMe} />
            <Route exact path="/list/:id" component={List}/>
            <Route exact path="/popularLists" component={PopularLists}/>

            
          </Switch>
                    
        </div>
      </Router>
    );
};

export default App;

// stateless components
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppContainer from '../AppContainer/AppContainer';
import Home from '../Home/Home';
import Sample from '../Sample/Sample';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/app'>
            <AppContainer />
          </Route>
          <Route path="/sample">
            <Sample />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

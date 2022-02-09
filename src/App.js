import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import RickPage from './RickPage';
import RickDetail from './RickDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <RickPage />
          </Route>
          <Route exact path='/rick/:id'>
            <RickDetail />
          </Route>
        </Switch>
  
      </div>
    </Router>
  );
}

export default App;

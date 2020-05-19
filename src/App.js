import React from 'react';
import './App.css';
import Home from './containers/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ViewCountry from './components/ViewCountry/ViewCountry'

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route  path="/view-country" component={ViewCountry} />
        </div>
      </Switch>      
    </Router>
    
  );
}

export default App;

import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Navigation';
import Proj from './components/Projects'

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Proj} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

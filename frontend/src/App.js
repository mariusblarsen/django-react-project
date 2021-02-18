import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Market from './pages/Market';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/market" component={Market} />
      </Switch>
    </Router>
    </>
  );
}

export default App;

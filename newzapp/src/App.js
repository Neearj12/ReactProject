import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Newz from './Components/Newz';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/business'>
            <Newz category='business' />
          </Route>
          <Route path='/entertainment'>
            <Newz category='entertainment' />
          </Route>
          <Route path='/general'>
            <Newz category='general' />
          </Route>
          <Route path='/health'>
            <Newz category='health' />
          </Route>
          <Route path='/science'>
            <Newz category='science' />
          </Route>
          <Route path='/technology'>
            <Newz category='technology' />
          </Route>
          <Route path='/'>
            <Newz category='general' />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

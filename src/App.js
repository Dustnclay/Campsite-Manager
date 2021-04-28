import React from 'react';
import {} from 'reactstrap';
import Survey from './components/Survey'
import Header from './components/Header'
import Manager from './components/Manager'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'



function App() {
  return (
<Router>
    <Header/>
  <Switch>

    <Route path="/survey">
      <Survey/>
    </Route >
    <Route path="/manager">
      <Manager style={{Color:'red'}}/>
    </Route>
  </Switch>
</Router>
  );
}

export default App;

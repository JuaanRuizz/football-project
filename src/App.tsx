import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavMenu from './Components/NavMenu/NavMenu';
import PageNotFound from './Components/404Error/PageNotFound';


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact component={Home} />
        <Route path="/navmenu" exact component={NavMenu} />
        <Route component={PageNotFound} />  
      </Switch>
    </Router>
  );
}

export default App;

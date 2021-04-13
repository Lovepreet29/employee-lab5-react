 import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashBoardPage from './pages/Dashboard'
import RegisterPage from './pages/RegisterPage'
import PageNotFound from './pages/404'
import PublicRoute from './Utils/PublicRoute'
import PrivateRoute from './Utils/PrivateRoute'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/"> <HomePage/></Route>
        <PrivateRoute path="/dashboard" component={DashBoardPage} />
        <PublicRoute path="/login" component={LoginPage} />
        <PublicRoute path="/register" component={RegisterPage} />
        <Route path="*"><PageNotFound/></Route>
      </Switch>    
    </Router>
    </>
    
  );
}

export default App;

 

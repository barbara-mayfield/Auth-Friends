import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './components/utils/PrivateRoute'

import Nav from './components/layout/Nav'
import Home from './components/layout/Home'
import FriendsList from './components/layout/FriendsList'
import Login from './components/user/Login'
import Logout from './components/user/Logout'
import Account from './components/user/Account'

function App() {

  const title='Friends App'

  return (
    <div className='App container'>
        <Nav logo='far fa-grin-beam fa-1x' title={title} />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/api/login' component={Login} />
          <PrivateRoute exact path="/account" component={Account} />
          <PrivateRoute exact path='/friends' component={FriendsList} />
			    <PrivateRoute exact path="/logout" component={Logout} />
        </Switch>
    </div>
  );
}

export default App;

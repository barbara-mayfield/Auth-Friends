import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './components/utils/PrivateRoute'

import Nav from './components/layout/Nav'
import Home from './components/layout/Home'
import MyFriends from './components/friends/MyFriends'
import Login from './components/user/Login'
import Logout from './components/user/Logout'
import Account from './components/user/Account'

function App() {

  const title='Friends App'

  return (
    <div className='App container'>
        <Nav logo='far fa-grin-beam fa-1x' title={title} />
        
        <Switch>
          <Route path='/api/login' component={Login} />
          <PrivateRoute exact path="/account" component={Account} />
          <PrivateRoute exact path='/friends' component={MyFriends} />
			    <PrivateRoute exact path="/logout" component={Logout} />
          <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;

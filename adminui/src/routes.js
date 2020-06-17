import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Requests from './components/Requests'

export default function Routes() {
  return (
    <Router>
        <Switch>
        <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/requests">
            <Requests />
          </Route>
          {/* <Route component={Notfound} /> */}
        </Switch>
    </Router>
  )
}

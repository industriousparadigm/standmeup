import React from 'react'
import { useAuth0 } from '../../react-auth0-spa'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../private-route'
import NavBar from '../nav-bar'
import Profile from '../profile'
import history from '../../utils/history'

const App: React.FC = () => {
  const { loading } = useAuth0()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='App'>
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path='/' exact />
          <PrivateRoute path='/profile' component={Profile} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

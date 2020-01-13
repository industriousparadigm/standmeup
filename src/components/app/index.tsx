import React from 'react'
import { useAuth0 } from '../../react-auth0-spa'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../private-route'
import NavBar from '../nav-bar'
import Profile from '../profile'
import history from '../../utils/history'
import ExternalApi from '../external-api'
import Topics from '../topics'

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
          <Route path='/' exact>
            Welcome to the main page
          </Route>
          <Route path='/topics' exact>
            <Topics />
          </Route>
          <PrivateRoute
            path='/bitches'
            component={() => <h1>Hello suckers</h1>}
          />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/external-api' component={ExternalApi} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

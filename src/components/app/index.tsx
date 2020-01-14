import React from 'react'
import { useAuth0 } from '../../react-auth0-spa'
import { Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../private-route'
import NavBar from '../nav-bar'
import Profile from '../profile'
import history from '../../utils/history'
import ExternalApi from '../external-api'
import Topics from '../topics'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height: '100vh'
  }
})

const App: React.FC = () => {
  const { loading } = useAuth0()

  const classes = useStyles()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className={classes.root}>
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

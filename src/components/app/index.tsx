import React from 'react'
import '../../global-style.scss'
import LoginForm from '../login-form'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AboutPage from '../about'

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <h1>Stand up and be counted</h1>
        <nav>
          <Link to='/about'>More info</Link>
        </nav>
        <br />
        <Switch>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/auth'>
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

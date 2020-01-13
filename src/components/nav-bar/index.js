import React from 'react'
import { useAuth0 } from '../../react-auth0-spa'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <div>
      {!isAuthenticated && (
        <Button
          variant='contained'
          color='primary'
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </Button>
      )}

      {isAuthenticated && (
        <>
          <Button variant='contained' color='primary' onClick={() => logout()}>
            Log out
          </Button>
          <span>
            <Link to='/'>
              <Button>Home</Button>
            </Link>
            <Link to='/profile'>
              <Button>Profile</Button>
            </Link>
            <Link to='/external-api'>
              <Button>External API</Button>
            </Link>
          </span>
        </>
      )}
    </div>
  )
}

export default NavBar

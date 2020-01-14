import React from 'react'
import { useAuth0 } from '../../react-auth0-spa'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'

const useStyles = makeStyles({
  large: {
    width: '200px',
    height: '200px'
  }
})

const Profile = () => {
  const { loading, user } = useAuth0()
  const classes = useStyles()

  if (loading || !user) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Avatar alt={user.name} src={user.picture} className={classes.large} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </>
  )
}

export default Profile

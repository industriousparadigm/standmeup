import React from 'react'
import PropTypes from 'prop-types'

const LoginForm: React.FC = () => {
  return (
    <form className='login-form' data-testid='login-form'>
      <div className='login-form-container'>
        <h3>Log in</h3>
        <input type='email' name='email' placeholder='email' />

        <input type='password' name='password' placeholder='password' />

        <button>Go</button>
      </div>
    </form>
  )
}

LoginForm.propTypes = {}

export default LoginForm

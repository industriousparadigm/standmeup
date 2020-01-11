import React from 'react'
import { render } from '@testing-library/react'
import LoginForm from './index'

describe('<LoginForm>', () => {
  it('renders a login form element', () => {
    const { getByTestId } = render(<LoginForm />)
    const formElement = getByTestId('login-form')
    expect(formElement).toBeInTheDocument()
  })
})

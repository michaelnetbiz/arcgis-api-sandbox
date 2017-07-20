import React from 'react'
import ReactDOM from 'react-dom'
import jest from 'jest'
import Sandbox from './Sandbox'

jest.it('doesn\'t blow up....', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Sandbox />, div)
})

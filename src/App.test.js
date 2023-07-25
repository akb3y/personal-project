import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import Mobile from './components/Mobile.jsx'
import Desktop from './components/Desktop.jsx'
import '@testing-library/jest-dom'

test('displays welcome text', () => {
  render(<App />)
  const welcomeText = screen.getByText(/Welcome/i)
  expect(welcomeText).toBeInTheDocument()
})

test('displays mobile version when mobile state is true', () => {
  jest.spyOn(React, 'useState').mockImplementation(() => [true, jest.fn()])

  render(<App />)

  const desktopElement = screen.getByText(/Desktop/i)
  const mobileElement = screen.getByText(/Mobile/i)

  expect(desktopElement).not.toBeInTheDocument()
  expect(mobileElement).toBeInTheDocument()
})

test('displays desktop version when mobile state is false', () => {
  jest.spyOn(React, 'useState').mockImplementation(() => [false, jest.fn()])

  render(<App />)

  const desktopElement = screen.getByText(/Desktop/i)
  const mobileElement = screen.getByText(/Mobile/i)

  expect(desktopElement).toBeInTheDocument()
  expect(mobileElement).not.toBeInTheDocument()
})

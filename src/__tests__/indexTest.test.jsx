import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, within } from '@testing-library/react'
import App from '../App'

test('renders product dashboard title', () => {
  render(<App />)
  expect(screen.getByText(/Product Dashboard/i)).toBeInTheDocument()
})

test('displays all products initially', () => {
  render(<App />)
  expect(screen.getByText(/Keyboard/i)).toBeInTheDocument()
  expect(screen.getByText(/Mouse/i)).toBeInTheDocument()
  expect(screen.getByText(/Monitor/i)).toBeInTheDocument()
  expect(screen.getByText(/USB Hub/i)).toBeInTheDocument()
})

test('applies conditional styling for out-of-stock products', () => {
  render(<App />)
  const mouse = screen.getByText(/Mouse/i)
  const card = mouse.closest('div')
  expect(card).toHaveClass('out-of-stock')
})

test('removes product from the dashboard when "Remove" button is clicked', () => {
  render(<App />)

  const mouse = screen.getByText(/Mouse/i)
  const card = mouse.closest('div')
  const removeButton = within(card).getByRole('button', { name: /remove/i })

  fireEvent.click(removeButton)

  expect(screen.queryByText(/Mouse/i)).not.toBeInTheDocument()
})

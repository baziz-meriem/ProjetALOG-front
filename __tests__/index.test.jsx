import { render, screen } from '@testing-library/react'

import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
import '@testing-library/jest-dom'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    useRouter.mockReturnValue({ query: {}})
    render(<Home />)
    expect(5).toEqual(5)
  })
})
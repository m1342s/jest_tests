import App from "./App";
import { render, screen } from '@testing-library/react'

describe('Testes para o componente principal', () => {
  test('Deve renderizar corretamente', () => {
    render(<App/>)
    expect(screen.getByText('cadastrar')).toBeInTheDocument()
  })
})
import App from "./App";
import { render } from '@testing-library/react'

describe('Testes para o componente principal', () => {
  test('Deve renderizar corretamente', () => {
    render(<App/>)
  })
})
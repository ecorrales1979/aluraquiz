import React from 'react'

import { Container } from './styles'

const Footer: React.FC = (props) => {
  return (
    <Container {...props}>
      <a href="https://www.alura.com.br/">
        <img
          src="https://alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </Container>
  )
}

export default Footer

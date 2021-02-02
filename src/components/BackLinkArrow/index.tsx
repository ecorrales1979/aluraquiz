import React from 'react'
import { LinkProps } from 'next/link'

import { Container } from './styles'

interface BackLinkArrowProps extends LinkProps {
  href: string
}

const BackLinkArrow: React.FC<BackLinkArrowProps> = ({ href }) => {
  return (
    <Container href={href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24" fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
          fill="white"
          fillOpacity="0.87"
        />
      </svg>
    </Container>
  )
}

export default BackLinkArrow

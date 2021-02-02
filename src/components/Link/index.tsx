import React from 'react'
import NextLink, { LinkProps } from 'next/link'

// import { Container } from './styles'

interface CustomLinkProps extends LinkProps {
  href: string
}

const Link: React.FC<CustomLinkProps> = ({ children, href, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link

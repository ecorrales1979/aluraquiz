import React from 'react'

import { Container, Header, Content } from './styles'

interface WidgetProps {
  header?: React.ReactNode
}

const Widget: React.FC<WidgetProps> = ({ header, children }) => {
  return (
    <Container>
      {header &&
        <Header>
          {header}
        </Header>
      }
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Widget

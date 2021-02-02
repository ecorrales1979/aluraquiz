import React from 'react'

import { Container, WidgetTopicProps } from './styles'

const WidgetTopic: React.FC<WidgetTopicProps> = (props) => (
  <Container {...props}>
    {props.children}
  </Container>
)

export default WidgetTopic

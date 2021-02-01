import React from 'react'

import { Container, QuestionInputProps } from './styles'

const QuestionInput: React.FC<QuestionInputProps> = (props) => (
  <Container {...props}>
    {props.alternative}
  </Container>
)

export default QuestionInput

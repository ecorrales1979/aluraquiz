import React from 'react'

import { Container } from './styles'
import { QuizBgProps } from './QuizBgProps'

const BackgroundImage: React.FC<QuizBgProps> = (props) => {
  return (
    <Container {...props} />
  )
}

export default BackgroundImage

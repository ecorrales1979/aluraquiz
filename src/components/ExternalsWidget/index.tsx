import React from 'react'

import { Container } from './styles'
import Widget from '../Widget'
import WidgetTopic from '../WidgetTopic'

interface ExternalsWidgetProps {
  external: string[]
}

const ExternalsWidget: React.FC<ExternalsWidgetProps> = ({ external }) => {
  return (
    <Widget>
      <h1>Quizes da galera!</h1>
      <ul>
        {external.map((link: string, idx) => {
          const linkData = link.replace(/\//g, '')
            .replace('https:', '')
            .replace('.vercel.app', '')

          const [project, user] = linkData.split('.')

          return (
            <Container key={idx}>
              <WidgetTopic href={`/quiz/${project}.${user}`}>
                {user}/{project}
              </WidgetTopic>
            </Container>
          )
        })}
      </ul>
      <p>Lorem ipsum dolor sit amet...</p>
    </Widget>
  )
}

export default ExternalsWidget

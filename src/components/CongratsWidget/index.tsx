import React from 'react'
import { useRouter } from 'next/router'

import { Div } from './styles'
import Widget from '../Widget'
import Button from '../Button'

interface ResultProps {
  name: string
  responses: number
  total: number
}

const CongratsWidget: React.FC<ResultProps> = ({ name, responses, total }) => {
  const router = useRouter()

  return (
    <Widget>
      <Div>
        Parabéns {name}! Você concluiu o Quiz.
      </Div>
      <Div>
        Você acertou {responses} de {total} perguntas.
      </Div>
      <Button
        type="button"
        onClick={() => router.push('/')}
      >
        Voltar
      </Button>
    </Widget>
  )
}

export default CongratsWidget

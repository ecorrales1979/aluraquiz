import React from 'react'

import { QuestionDTO } from '../../dtos/DatabaseDTO'
import Widget from '../Widget'
import Button from '../Button'
import WidgetTopic from '../WidgetTopic'
import BackLinkArrow from '../BackLinkArrow'

interface QuestionWidgetProps {
  questions: QuestionDTO[]
  questionIndex: number
  currentResponse: number
  handleSelection: (id: number) => void
  handleSubmit: () => void
}

const QuestionWidget: React.FC<QuestionWidgetProps> = ({
  questions,
  questionIndex,
  currentResponse,
  handleSelection,
  handleSubmit
}) => {
  const question = questions[questionIndex]

  return (
    <Widget
      header={
        <>
          <BackLinkArrow href='/' />
          <h3>Pergunta {questionIndex + 1} de {questions.length}</h3>
        </>
      }
    >
      {question.image &&
        <img
          src={question.image}
          alt="Pergunta"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover'
          }}
        />
      }
      <div>{question.title}</div>
      {question.description && <p>{question.description}</p>}
      {question.alternatives.map((alternative, index) => (
        <WidgetTopic
          key={index}
          onClick={() => handleSelection(index)}
          selected={index === currentResponse}
        >
            {alternative}
        </WidgetTopic>
      ))}
      <Button
        type="button"
        onClick={handleSubmit}
        disabled={currentResponse === null}
      >
        Confirmar
      </Button>
    </Widget>
  )
}

export default QuestionWidget

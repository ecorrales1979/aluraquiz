import React from 'react'

import db from '../../../db.json'
import Widget from '../Widget'
import Button from '../Button'
import QuestionInput from '../QuestionInput'

interface QuestionWidgetProps {
  questionIndex: number
  currentResponse: number
  handleSelection: (id: number) => void
  handleSubmit: () => void
}

const questions = db.questions

const QuestionWidget: React.FC<QuestionWidgetProps> = ({
  questionIndex,
  currentResponse,
  handleSelection,
  handleSubmit
}) => {
  const question = questions[questionIndex]

  return (
    <Widget
      header={<h3>Pergunta {questionIndex + 1} de {questions.length}</h3>}
    >
      {question.image && <img src={question.image} />}
      <div>{question.title}</div>
      {question.description && <p>{question.description}</p>}
      {question.alternatives.map((alternative, index) =>
        (<QuestionInput
          key={index}
          onClick={() => handleSelection(index)}
          alternative={alternative}
          selected={index === currentResponse}
        />)
      )}
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

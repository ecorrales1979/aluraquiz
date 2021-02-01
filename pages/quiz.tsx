import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

import db from '../db.json'
import LoadingWidget from '../src/components/LoadingWidget'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import QuestionWidget from '../src/components/QuestionWidget'
import CongratsWidget from '../src/components/CongratsWidget'

interface QueryProps extends ParsedUrlQuery {
  name: string
}

const questions = db.questions
const total = questions.length

const Quiz: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [currentResponse, setCurrentResponse] = useState<number>(null)
  const [result, setResult] = useState(0)
  const router = useRouter()
  const { name } = router.query as QueryProps

  useEffect(() => {
    setInterval(() => setLoading(false), 2000)
  }, [])

  const handleSelection = (selectedIndex: number) => {
    setCurrentResponse(selectedIndex)
  }

  const handleSubmit = useCallback(() => {
    const question = questions[questionIndex]

    if (currentResponse === question.answer) {
      setResult(result + 1)
    }

    setCurrentResponse(null)
    setQuestionIndex(questionIndex + 1)
  }, [questionIndex, currentResponse])

  return (
    <>
      <QuizBackground imageURL={db.bg}>
        <QuizContainer>
          <QuizLogo />
          {loading
            ? <LoadingWidget loading={loading} />
            : questionIndex === total
              ? <CongratsWidget name={name} responses={result} total={total} />
              : <QuestionWidget
                questionIndex={questionIndex}
                currentResponse={currentResponse}
                handleSelection={handleSelection}
                handleSubmit={handleSubmit}
              />
          }
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl={db.projectURL} />
      </QuizBackground>
    </>
  )
}

export default Quiz

import React, { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { ParsedUrlQuery } from 'querystring'

import LoadingWidget from '../../components/LoadingWidget'
import QuizContainer from '../../components/QuizContainer'
import QuizLogo from '../../components/QuizLogo'
import GitHubCorner from '../../components/GitHubCorner'
import QuizBackground from '../../components/QuizBackground'
import Footer from '../../components/Footer'
import QuestionWidget from '../../components/QuestionWidget'
import CongratsWidget from '../../components/CongratsWidget'
import { DatabaseDTO } from '../../dtos/DatabaseDTO'

interface QueryProps extends ParsedUrlQuery {
  name: string
}

interface QuizProps {
  db: DatabaseDTO
}

const QuizScreen: React.FC<QuizProps> = ({ db }) => {
  const [loading, setLoading] = useState(true)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [currentResponse, setCurrentResponse] = useState<number>(null)
  const [result, setResult] = useState(0)
  const router = useRouter()
  const { name } = router.query as QueryProps
  const questions = db.questions
  const total = questions.length

  useEffect(() => {
    setInterval(() => setLoading(false), 2000)

    return () => {}
  }, [])

  const handleSelection = useCallback((selectedIndex: number) => {
    setCurrentResponse(selectedIndex)
  }, [])

  const handleSubmit = useCallback(() => {
    const question = questions[questionIndex]

    if (currentResponse === question.answer) {
      setResult(result + 1)
    }

    setCurrentResponse(null)
    setQuestionIndex(questionIndex + 1)
  }, [questionIndex, currentResponse])

  return (
    <ThemeProvider theme={db.theme}>
      <QuizBackground imageURL={db.bg}>
        <QuizContainer>
          <QuizLogo />
          {loading
            ? <LoadingWidget loading={loading} theme={db.theme} />
            : questionIndex === total
              ? <CongratsWidget name={name} responses={result} total={total} />
              : <QuestionWidget
                questions={db.questions}
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
    </ThemeProvider>
  )
}

export default QuizScreen

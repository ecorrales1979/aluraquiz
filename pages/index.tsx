import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'

import db from '../db.json'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import Input from '../src/components/Input'
import Button from '../src/components/Button'

const Home: React.FC = () => {
  const [name, setName] = useState<string>(null)
  const router = useRouter()

  const handleNameChange = useCallback((ev) => {
    setName(ev.target.value)
  }, [])

  const handleFormSubmit = useCallback((ev) => {
    router.push(`/quiz?name=${name}`)
  }, [name])

  return (
    <QuizBackground imageURL={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget header={db.title}>
          <div>{db.description}</div>
          <Input placeholder="Entre seu nome" onChange={handleNameChange} />
          <Button type="button" onClick={handleFormSubmit} disabled={!name}>
            Jogar {name}
          </Button>
        </Widget>
        <Widget>
          <h1>Quizes da galera!</h1>
          <p>Lorem ipsum dolor sit amet...</p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.projectURL} />
    </QuizBackground>
  )
}

export default Home

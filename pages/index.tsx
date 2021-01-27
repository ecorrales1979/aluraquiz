import React from 'react'
import styled from 'styled-components'

import db from '../db.json'
import QuizLogo from '../src/components/QuizLogo'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

const Home: React.FC = () => {
  return (
    <QuizBackground imageURL={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget header={db.title}>
          <p>{db.description}</p>
        </Widget>
        <Widget>
          <h1>Quizes da galera!</h1>
          <p>Lorem ipsum dolor sit amet...</p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="http://github.com/ecorrales1979" />
    </QuizBackground>
  )
}

export default Home

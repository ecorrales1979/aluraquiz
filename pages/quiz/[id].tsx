import React from 'react'
import { GetServerSidePropsContext } from 'next'

import QuizScreen from '../../src/screens/QuizScreen'
import { DatabaseDTO } from '../../src/dtos/DatabaseDTO'

interface QuizProps {
  data: DatabaseDTO
}

interface ServerSideProps extends GetServerSidePropsContext {
  id: string
}

const quiz: React.FC<QuizProps> = (props) => {
  return <QuizScreen db={props.data} />
}

export default quiz

export const getServerSideProps = async (
  context: ServerSideProps
) => {
  const { id } = context.params
  const link = `https://${id}.vercel.app/api/db`

  const data = await fetch(link)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }

      throw new Error('Erro obtendo os dados')
    })
    .then((json) => json)
    .catch((err) => console.error(err))

  return {
    props: {
      data
    }
  }
}

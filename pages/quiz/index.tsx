import React from 'react'

import db from '../../db.json'
import QuizScreen from '../../src/screens/QuizScreen'

const Quiz: React.FC = () => (
  <QuizScreen db={db} />
)

export default Quiz

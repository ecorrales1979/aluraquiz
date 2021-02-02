import { Theme } from './ThemeDTO'

export interface QuestionDTO {
  alternatives: string[]
  answer: number
  title: string
  description: string
  image: string
}

export interface DatabaseDTO {
  bg: string
  title: string
  description: string
  projectURL: string
  questions: QuestionDTO[]
  external: string[]
  theme: Theme
}

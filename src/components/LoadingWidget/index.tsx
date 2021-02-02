import React from 'react'
import Loader from 'react-spinners/PacmanLoader'

import { Container } from './styles'
import { Theme } from '../../dtos/ThemeDTO'
import Widget from '../Widget'

interface LoaderProps {
  loading: boolean
  theme: Theme
}

const LoadingWidget: React.FC<LoaderProps> = ({ loading, theme }) => (
  <Widget header={<h3>Loading...</h3>}>
    <Container>
      <Loader loading={loading} size={25} color={theme.colors.primary} />
    </Container>
  </Widget>
)

export default LoadingWidget

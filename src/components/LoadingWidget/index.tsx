import React from 'react'
import Loader from 'react-spinners/PacmanLoader'

import db from '../../../db.json'
import { Container } from './styles'
import Widget from '../Widget'

interface LoaderProps {
  loading: boolean
}

const LoadingWidget: React.FC<LoaderProps> = ({ loading }) => (
  <Widget header={<h3>Loading...</h3>}>
    <Container>
      <Loader loading={loading} size={25} color={db.theme.colors.primary} />
    </Container>
  </Widget>
)

export default LoadingWidget

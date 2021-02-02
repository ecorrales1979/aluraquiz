import styled from 'styled-components'

import Link from '../Link'

export const Container = styled(Link)`
  width: 24px;
  height: 24px;
  display: inline-block;
  transition: all .3s ease;

  &:hover {
    opacity: .5;
  }

  svg {
    vertical-align: middle;
  }
`

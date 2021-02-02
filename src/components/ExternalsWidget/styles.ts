import styled, { ThemeProps } from 'styled-components'

import { Theme } from './../../dtos/ThemeDTO'

export const Container = styled.li`
  list-style: none;
  margin: 8px 0;

  a {
    color: ${({ theme }: ThemeProps<Theme>) => theme.colors.contrastText};
    text-decoration: none;
  }
`

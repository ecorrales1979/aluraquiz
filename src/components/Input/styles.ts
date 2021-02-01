import styled, { ThemeProps } from 'styled-components'

import { Theme } from '../../dtos/ThemeDTO'

export const Container = styled.input`
  background-color: ${({ theme }: ThemeProps<Theme>) => theme.colors.mainBg};
  width: 100%;
  padding: 7px 15px;
  margin: 25px 0;
  font-size: 14px;
  color: ${({ theme }: ThemeProps<Theme>) => theme.colors.contrastText};
  border: 1px solid ${({ theme }: ThemeProps<Theme>) => theme.colors.primary};
  border-radius: ${({ theme }: ThemeProps<Theme>) => theme.borderRadius};
  outline: none;

  &::placeholder {
    color: ${({ theme }: ThemeProps<Theme>) => theme.colors.contrastText};
    opacity: 0.7;
  }
`

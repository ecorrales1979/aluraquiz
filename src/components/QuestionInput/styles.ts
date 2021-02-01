import React from 'react'
import styled, { ThemeProps } from 'styled-components'
import { shade } from 'polished'

import { Theme } from '../../dtos/ThemeDTO'

export interface QuestionInputProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  alternative: string;
  selected: boolean;
  theme?: Theme;
}

export const Container = styled.a<QuestionInputProps>`
  display: block;
  background-color: ${(props: QuestionInputProps) =>
    props.selected ? props.theme.colors.secondary : props.theme.colors.primary};
  color: ${({ theme }: ThemeProps<Theme>) => theme.colors.contrastText};
  font-size: 14px;
  line-height: 1;
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: ${({ theme }: ThemeProps<Theme>) => theme.borderRadius};
  outline: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus,
  &:hover {
    background-color: ${(props: QuestionInputProps) =>
      shade(
        0.2,
        props.selected
          ? props.theme.colors.secondary
          : props.theme.colors.primary
      )};
  }

  input {
    display: none;
  }
`

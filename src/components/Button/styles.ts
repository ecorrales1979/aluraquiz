/* eslint max-len: ["error", { "code": 80 }] */
import { ButtonHTMLAttributes } from 'react'
import styled, { ThemeProps } from 'styled-components'
import { shade } from 'polished'

import { Theme } from '../../dtos/ThemeDTO'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ThemeProps<Theme> {}

export const Container = styled.button<ButtonProps>`
  background-color: ${(props: ButtonProps) =>
    props.disabled ? '#999' : props.theme.colors.secondary};
  color: ${({ theme }: ThemeProps<Theme>) => theme.colors.contrastText};
  border: 0;
  border-radius: ${({ theme }: ThemeProps<Theme>) => theme.borderRadius};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 1;
  padding: 10px 16px;
  outline: none;
  transition: background-color 0.3s ease;
  cursor: ${(props: ButtonProps) => props.disabled ? 'not-allowed' : 'pointer'};

  &:focus,
  &:hover {
    background-color: ${(props: ButtonProps) =>
      props.disabled ? '#999' : shade(0.2, props.theme.colors.secondary)};
  }
`

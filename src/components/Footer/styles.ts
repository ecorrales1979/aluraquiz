import styled, { ThemeProps } from 'styled-components';

import { Theme } from '../../dtos/ThemeDTO'

export const Container = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }: ThemeProps<Theme>) => theme.borderRadius};

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: .3s;

    &:hover,
    &:focus {
      opacity: .5;
    }

    span {
      text-decoration: underline;
    }
  }
`;

import styled, { ThemeProps } from 'styled-components';

import { Theme } from '../../dtos/ThemeDTO'

export const Container = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({theme}: ThemeProps<Theme>) => theme.colors.primary};
  background-color: ${({theme}: ThemeProps<Theme>) => theme.colors.mainBg};
  border-radius: ${({theme}: ThemeProps<Theme>) => theme.borderRadius};
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({theme}: ThemeProps<Theme>) => theme.colors.primary};

  * {
    margin: 0;
  }
`

export const Content = styled.header`
  padding: 24px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;
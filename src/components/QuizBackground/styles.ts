import styled, { ThemeProps } from 'styled-components';

import { Theme } from '../../dtos/ThemeDTO'
import { QuizBgProps } from './QuizBgProps'

export const Container = styled.div<QuizBgProps>`
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-image: url(${({ imageURL }) => imageURL});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;

  @media screen and (max-width: 500px) {
    background-image: none;

    &:after {
      content: "";
      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }: ThemeProps<Theme>) => theme.colors.mainBg}),
        url(${({ imageURL }) => imageURL});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }

    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

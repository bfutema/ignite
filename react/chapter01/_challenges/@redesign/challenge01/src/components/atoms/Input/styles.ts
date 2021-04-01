import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, isErrored, isFocused, isFilled }) => css`
    width: 100%;
    height: 46px;

    color: ${theme.colors.text};
    background: ${transparentize(0.1, theme.colors.background)};
    border-radius: 4px;
    border: 2px solid ${theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    & + div {
      margin-top: 32px;
    }

    &:hover {
      box-shadow: inset 0 0 1em transparent, 0 0 0.4em ${theme.colors.primary};
    }

    input {
      background: transparent;
      flex: 1;
      border: 0;
      width: 100%;
      color: ${theme.colors.text};

      &::placeholder {
        color: ${theme.colors.gray.default};
      }
    }

    svg:nth-of-type(1) {
      cursor: pointer;
    }

    svg:nth-of-type(2) {
      margin-left: 8px;
    }

    ${isErrored &&
    css`
      border-color: ${theme.colors.error};
    `}

    ${isFocused &&
    css`
      color: ${theme.colors.success};
      border-color: ${theme.colors.primary};
    `}

    ${isFilled &&
    css`
      color: ${theme.colors.primary};
    `}
  `}
`;

export const IconContainer = styled.div`
  ${({ theme }) => css`
    background: transparent;
    width: 34px;
    height: 34px;
    border-radius: 8px;

    cursor: pointer;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${theme.colors.primary};
    }
  `}
`;

export const Error = styled(Tooltip)`
  ${({ theme }) => css`
    height: 20px;

    position: absolute;
    right: -2.5rem;

    span {
      color: ${theme.colors.white} !important;
      background: ${theme.colors.error};

      &::before {
        border-color: ${theme.colors.error} transparent;
      }
    }
  `}
`;

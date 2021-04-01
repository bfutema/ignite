import styled, { css } from 'styled-components';

export const Container = styled.ul`
  list-style: none;
`;

interface LiProps {
  isComplete?: boolean;
}

export const Li = styled.li<LiProps>`
  ${({ theme, isComplete }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${theme.colors.gray.default};

    padding: 1rem 0;

    div {
      display: flex;
      align-items: center;

      gap: 14px;

      outline: 0;

      p {
        font-size: 1rem;
        color: ${theme.colors.text};
      }

      ${isComplete &&
      css`
        p {
          text-decoration: line-through;
          opacity: 0.6;
        }
      `}
    }

    button {
      background: transparent;
      border: 0;

      display: flex;
      align-items: center;

      transition: filter 0.2s;

      svg {
        color: ${theme.colors.red};
      }

      &:hover {
        svg {
          filter: brightness(0.8);
        }
      }
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;

    position: relative;

    margin-bottom: 18px;
    padding-left: 14px;

    cursor: pointer;

    input {
      height: 0;
      width: 0;

      position: absolute;

      opacity: 0;

      cursor: pointer;

      &:checked {
        & ~ span {
          background-color: ${theme.colors.primary};
        }

        & ~ span:after {
          display: block;
        }
      }
    }

    span {
      width: 16px;
      height: 16px;

      background-color: #ebebeb;
      border-radius: 2px;

      position: absolute;
      top: 0;
      left: 0;

      &:after {
        content: '';

        width: 3px;
        height: 6px;

        border: solid white;
        border-width: 0 2px 2px 0;

        position: absolute;
        top: 3px;
        left: 6px;

        display: none;

        transform: rotate(45deg);
      }
    }
  `}
`;

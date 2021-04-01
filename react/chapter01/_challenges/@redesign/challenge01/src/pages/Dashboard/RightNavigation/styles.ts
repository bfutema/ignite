import styled, { css } from 'styled-components';
import { darken, shade } from 'polished';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    border-radius: ${theme.radii.default};
    background: ${shade(-0.3, theme.colors.background)};
    box-shadow: ${theme.title === 'light'
      ? theme.shadows.medium
      : theme.shadows.tiny};

    padding: 1.2rem 1.6rem;

    display: flex;
    flex-direction: column;
  `}
`;

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.6);
      }

      &:nth-of-type(1) {
        color: ${theme.colors.text};

        font-size: ${theme.fontSizes.veryTiny};

        background: ${theme.title === 'light'
          ? darken(0.2, theme.colors.background)
          : theme.colors.background};
        border-radius: 0.4rem;

        padding: 0.4rem 1.5rem;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  `}
`;

export const Perfil = styled.div`
  ${({ theme }) => css`
    padding: 3rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 4rem;
      height: 4rem;
    }

    strong {
      margin-top: 1rem;
    }

    span {
      display: block;

      margin-top: 0.2rem;

      font-size: ${theme.fontSizes.veryTiny};
      font-weight: 500;

      color: ${theme.title === 'light'
        ? darken(0.1, theme.colors.gray.light)
        : theme.colors.gray.light};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    div {
      & + div {
        margin-top: 1rem;
      }

      strong {
        display: block;

        font-size: ${theme.fontSizes.tiny};
      }

      span {
        display: block;

        margin-top: 0.2rem;

        font-size: ${theme.fontSizes.veryTiny};
        font-weight: 500;

        color: ${theme.title === 'light'
          ? darken(0.1, theme.colors.gray.light)
          : theme.colors.gray.light};
      }
    }
  `}
`;

export const NotCompletedTasks = styled.div``;

export const CompletedTasks = styled.div``;

import styled, { css } from 'styled-components';
import { darken, shade } from 'polished';

export const Container = styled.div`
  padding: 1rem;
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

export const TasksInformations = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);

    div {
      width: 100%;

      border-radius: ${theme.radii.default};
      background: ${shade(0.2, theme.colors.background)};
      box-shadow: ${theme.title === 'light'
        ? theme.shadows.medium
        : theme.shadows.tiny};

      font-size: 0.8rem;

      padding: 1rem;

      display: flex;
      flex-direction: column;

      strong {
        font-size: 2rem;
      }
    }
  `}
`;

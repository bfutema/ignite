import styled, { css } from 'styled-components';
import { darken, shade } from 'polished';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  gap: 1rem;
  grid-template-columns: 64px 1fr 260px;
`;

export const Main = styled.main`
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

export const Title = styled.header`
  ${({ theme }) => css`
    width: 100%;

    padding-bottom: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${theme.colors.gray.darker};

    div p {
      color: ${theme.title === 'light'
        ? darken(0.1, theme.colors.gray.light)
        : theme.colors.gray.light};

      font-size: ${theme.fontSizes.veryTiny};
      font-weight: 500;
      letter-spacing: 0.12rem;
    }
  `}
`;

export const Form = styled(Unform)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div div div {
      margin-right: 3.5rem;
    }

    input {
      padding: 0 1rem;
    }

    button {
      margin-left: 2rem;

      width: 2.5rem;
      height: 2.5rem;

      background: ${theme.colors.primary};
      border-radius: 2.5rem;
      box-shadow: ${theme.shadows.medium};

      display: flex;
      align-items: center;
      justify-content: center;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`;

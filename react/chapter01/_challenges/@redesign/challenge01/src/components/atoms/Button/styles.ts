import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

interface IContainerProps {
  outline?: boolean;
  color: string;
}

export const Container = styled.button<IContainerProps>`
  ${({ theme, color, outline }) => css`
    min-width: 180px;

    background: ${outline ? 'transparent' : color};
    color: ${outline ? color : theme.colors.white};
    border: 1px solid ${color};

    padding: 8px 16px;
    border-radius: 4px;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.08);

    font-size: 18px;
    font-weight: bold;

    letter-spacing: 1px;
    text-transform: uppercase;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.4s;

    &:hover {
      color: ${outline && lighten(0.2, color)};
      background: ${outline && shade(0.2, color)};
      box-shadow: inset 0 0 1em transparent,
        0 0 0.4em ${theme.colors.gradients.primary};
    }

    svg {
      margin-right: 4px;
    }
  `}
`;

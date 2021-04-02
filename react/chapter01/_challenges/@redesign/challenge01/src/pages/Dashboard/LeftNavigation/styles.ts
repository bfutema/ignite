import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    border-radius: ${theme.radii.default};

    padding: 1.2rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      margin-bottom: 3rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      strong:nth-of-type(1) {
        color: ${theme.colors.primary};

        font-size: ${theme.fontSizes.default};
        font-weight: bold;

        line-height: 1rem;

        small {
          font-size: 1rem;
        }
      }
    }
  `}
`;

const navItemActive = {
  css: css`
    ${({ theme }) => css`
      background: ${theme.colors.gradients.primary};

      &:before {
        content: '';

        width: 3px;
        height: 100%;

        position: absolute;
        top: 0;
        left: -15px;

        background: ${theme.colors.primary};
        border-radius: 6px;
      }

      svg {
        color: ${theme.colors.white} !important;
      }
    `}
  `,
};

interface NavItemProps {
  isActive: boolean;
}

export const NavItem = styled.li<NavItemProps>`
  ${({ theme, isActive }) => css`
    width: 34px;
    height: 34px;

    background: ${theme.colors.background};
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    position: relative;

    transition: filter 0.2s;

    & + li {
      margin-top: 1.6rem;
    }

    &:hover {
      filter: brightness(0.9);
    }

    ${isActive && navItemActive.css}

    a {
      width: 16px;
      height: 16px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

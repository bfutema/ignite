import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Form } from '@unform/web';

export const AnimatedContainer = styled(motion.div)`
  ${({ theme }) => css`
    max-width: 35rem;

    padding: 3.2rem;

    color: ${theme.colors.black};
    background: ${theme.colors.white};
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.default};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 560px) {
      padding: 1.5rem;
    }

    h1 {
      color: ${theme.colors.primary};
    }

    h2 {
      font-size: ${theme.fontSizes.tiny};
      font-weight: 500;
      text-align: center;

      margin: 1rem 2rem 0;

      a {
        color: ${theme.colors.secondaryDark};

        margin-left: 4px;

        position: relative;

        &::after {
          content: '';

          width: 0;
          height: 2px;

          background: ${theme.colors.secondaryLight};

          position: absolute;
          bottom: -2px;
          left: 0;

          transition: width 0.2s ease-in-out;
        }

        &:hover {
          color: ${theme.colors.secondaryLight};

          &::after {
            width: 100%;
          }
        }
      }
    }
  `}
`;

export const Unform = styled(Form)`
  width: 100%;

  margin-top: 2.4rem;
  padding: 0 2rem 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    width: 100%;

    margin-bottom: 1.5rem;

    input {
      padding: 0.8rem 1.2rem;

      ::placeholder {
        opacity: 0.4;
      }
    }
  }

  button {
    width: 100%;
  }
`;

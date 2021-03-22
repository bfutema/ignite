import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 170px;
    background: ${props => props.theme.colors.white};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    opacity: 0;
    visibility: hidden;

    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: ${({ theme }) => theme.colors.primary};

    &::before {
      content: '';
      border-style: solid;
      border-color: ${({ theme }) => theme.colors.primary} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 48%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

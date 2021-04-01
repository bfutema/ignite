import React from 'react';
import { FiHome, FiUser } from 'react-icons/fi';

import { useTheme } from 'styled-components';
import { Container, NavItem } from './styles';
import { useAuth } from '../../../hooks/useAuth';

interface RightNavigationProps {
  itemActive: string;
  setItemActive: React.Dispatch<React.SetStateAction<string>>;
}

const RightNavigation: React.FC<RightNavigationProps> = ({
  itemActive,
  setItemActive,
}) => {
  const { colors } = useTheme();
  const { signOut } = useAuth();

  return (
    <Container>
      <button type="button" onClick={signOut}>
        <strong>
          WE
          <br />
          <small>Notes</small>
        </strong>
      </button>

      <ul>
        <NavItem
          isActive={itemActive === 'home'}
          onClick={() => setItemActive('home')}
        >
          <FiHome color={colors.text} />
        </NavItem>

        <NavItem
          isActive={itemActive === 'user'}
          onClick={() => setItemActive('user')}
        >
          <FiUser color={colors.text} />
        </NavItem>
      </ul>
    </Container>
  );
};

export default RightNavigation;

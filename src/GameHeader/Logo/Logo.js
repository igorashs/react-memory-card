import styled from 'styled-components';
import logo from './eevee-logo.png';

const StyledLogo = styled.div`
  width: 80px;
  min-width: 50px;
`;

export function Logo() {
  return (
    <StyledLogo>
      <img src={logo} alt='Poke Logo' />
    </StyledLogo>
  );
}

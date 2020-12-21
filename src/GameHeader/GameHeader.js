import styled from 'styled-components';
import { Logo } from './Logo';
import { Scoreboard } from './Scoreboard';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 60px;
  background-color: var(--primary);

  @media (max-width: 480px) {
    h1 {
      font-size: 28px;
    }
  }
`;

export function GameHeader({ score, bestScore }) {
  return (
    <StyledHeader>
      <Logo />
      <h1>PokeMemory!</h1>
      <Scoreboard score={score} bestScore={bestScore} />
    </StyledHeader>
  );
}

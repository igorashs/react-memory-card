import styled from 'styled-components';
import { Logo } from './Logo';
import { Scoreboard } from './Scoreboard';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 60px;
  padding: 10px;
  background-color: var(--secondary);
  border-bottom: 3px solid var(--complimentary);
  box-shadow: inset 0px 5px 6px var(--primary);

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

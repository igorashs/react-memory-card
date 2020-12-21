import styled from 'styled-components';
import { Modal } from '../shared/Layout';

const GameOverModal = styled(Modal)`
  p {
    text-align: center;
    font-size: 30px;
  }

  h2 {
    font-size: 44px;
  }

  @media (max-width: 480px) {
    p {
      font-size: 20px;
    }

    h2 {
      font-size: 28px;
    }
  }

  z-index: 2021;
`;

const Button = styled.button`
  margin-top: 20px;
  color: var(--primary-text);
  background-color: var(--secondary);
  font-size: 24px;
  padding: 5px 12px;
  border: 0;
  cursor: pointer;

  :hover {
    background-color: rgb(70 77 90);
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export function GameOver({ score, onNewGameClick, show }) {
  return (
    show && (
      <GameOverModal>
        <h2>Game Over!</h2>
        <p>Congratulations your Score is {score}</p>
        <Button onClick={onNewGameClick}>New Game</Button>
      </GameOverModal>
    )
  );
}

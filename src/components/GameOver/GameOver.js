import styled from 'styled-components';

const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--primary);

  p {
    align-text: center;
    font-size: 30px;
  }

  h2 {
    font-size: 44px;
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
`;

export default function GameOver({ score, onNewGameClick }) {
  return (
    <Modal>
      <h2>Game Over!</h2>
      <p>Congratulations your Score is {score}</p>
      <Button onClick={onNewGameClick}>New Game</Button>
    </Modal>
  );
}

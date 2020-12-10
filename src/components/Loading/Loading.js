import styled, { keyframes } from 'styled-components';
import spinner from '../../assets/pikaSpinner.svg';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.2);
  }
`;

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

  img {
    animation: ${spin} 500ms linear infinite;
    min-width: 135px;
    min-height: 135px;
  }

  p {
    align-text: center;
    font-size: 30px;
    animation: ${pulse} 500ms alternate infinite;
  }
`;

export default function Loading({ text }) {
  return (
    <Modal>
      <img src={spinner} alt='spinner' />
      {text && <p>{text}</p>}
    </Modal>
  );
}

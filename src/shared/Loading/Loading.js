import styled, { keyframes } from 'styled-components';
import spinner from './pikaSpinner.svg';
import { Modal } from '../Layout';

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

const LoadingModal = styled(Modal)`
  img {
    animation: ${spin} 500ms linear infinite;
    width: 100px;
  }

  p {
    text-align: center;
    font-size: 28px;
    animation: ${pulse} 500ms alternate infinite;
  }

  @media (max-width: 480px) {
    img {
      width: 60px;
    }

    p {
      font-size: 20px;
    }
  }

  z-index: 2021;
`;

export function Loading({ text, show }) {
  return (
    show && (
      <LoadingModal>
        <img src={spinner} alt='spinner' />
        {text && <p>{text}</p>}
      </LoadingModal>
    )
  );
}

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
    width: 60px;
    animation: ${spin} 500ms linear infinite;
  }

  p {
    font-size: 20px;
    text-align: center;
    animation: ${pulse} 500ms alternate infinite;
  }

  @media (min-width: 576px) {
    img {
      width: 100px;
    }

    p {
      font-size: 28px;
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

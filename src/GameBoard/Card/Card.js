import styled, { keyframes, css } from 'styled-components';
import { useState, useEffect } from 'react';

const DURATION = 400;

const appear = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 60px;
  position: relative;

  border-radius: 5px;
  border: 3px solid rgb(43 56 41);
  background-color: rgb(64 81 62);
  box-shadow: 0px 1px 4px #585858;
  transition: all 200ms;

  overflow: hidden;
  cursor: pointer;

  ${({ animation }) =>
    animation &&
    css`
      animation: ${appear} ${DURATION}ms 1;
    `}

  img {
    width: 200px;
    height: 200px;
  }

  h3 {
    font-size: 24px;
    padding: 0 5px;
    user-select: none;
  }

  img {
    width: 100px;
    height: 100px;
  }

  h3 {
    font-size: 16px;
  }

  @media (min-width: 992px) {
    img {
      min-width: 160px;
      min-height: 160px;
    }

    h3 {
      font-size: 20px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (min-width: 576px) {
    img {
      width: 120px;
      height: 120px;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  background-color: #333;
  height: 1px;
`;

export function Card(props) {
  const [toAnimate, setToAnimate] = useState();

  const { card, alt = card.name, onCardClick, animate } = props;
  const { name, src, id } = card;

  useEffect(() => {
    setToAnimate(true);
    const timeout = setTimeout(() => {
      setToAnimate(false);
    }, DURATION);

    return () => {
      clearTimeout(timeout);
    };
  }, [animate]);

  return (
    <StyledCard onClick={() => onCardClick(id)} animation={toAnimate}>
      <img src={src} alt={alt} draggable='false' />
      <Divider />
      <h3>{name}</h3>
    </StyledCard>
  );
}

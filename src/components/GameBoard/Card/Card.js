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

  @media (min-width: 975px) {
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 975px) {
    img {
      width: 160px;
      height: 160px;
    }
  }

  @media (max-width: 575px) {
    img {
      width: 100px;
      height: 100px;
    }

    h3 {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 60px;
      height: 60px;
    }

    h3 {
      font-size: 16px;
    }
  }
`;

const Divider = styled.div`
  width: 100%;
  background-color: #333;
  height: 1px;
`;

export default function Card(props) {
  const [toAnimate, setToAnimate] = useState();

  const { card, alt = card.name, onCardClick, triggerAnimation } = props;
  const { name, src, id } = card;

  useEffect(() => {
    setToAnimate(true);
    const timeout = setTimeout(() => {
      setToAnimate(false);
    }, DURATION);

    return () => {
      clearTimeout(timeout);
    };
  }, [triggerAnimation]);

  return (
    <StyledCard onClick={() => onCardClick(id)} animation={toAnimate}>
      <img src={src} alt={alt} draggable='false' />
      <Divider />
      <h3>{name}</h3>
    </StyledCard>
  );
}

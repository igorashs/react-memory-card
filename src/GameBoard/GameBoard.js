import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Card } from './Card';

const StyledMain = styled.main`
  flex: 1 1 auto;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledBoard = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
`;

export function GameBoard({ cards, onCardClick }) {
  const [animate, setAnimate] = useState();

  useEffect(() => {}, [animate]);

  const handleCardClick = (id) => {
    setAnimate((prev) => !prev);
    onCardClick(id);
  };

  return (
    <StyledMain>
      <StyledBoard>
        {cards &&
          cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onCardClick={handleCardClick}
              animate={animate}
            />
          ))}
      </StyledBoard>
    </StyledMain>
  );
}

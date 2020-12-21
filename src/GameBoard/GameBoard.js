import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Card } from './Card';
import { Status } from './Status';
import { Loading } from '../shared/Loading';

const StyledBoard = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
  padding: 5px;
`;

const StyledMain = styled.main`
  flex: 1 1 auto;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export function GameBoard({ cards, onCardClick, lvl, appLoaded }) {
  const [animate, setAnimate] = useState();

  useEffect(() => {}, [animate]);

  const handleCardClick = (id) => {
    setAnimate((prev) => !prev);
    onCardClick(id);
  };

  return (
    <StyledMain>
      <Status text={`Choose your next Pokemon! Lvl ${lvl.nr}`} />
      <StyledBoard>
        {cards
          ? cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                onCardClick={handleCardClick}
                animate={animate}
              />
            ))
          : appLoaded && <Loading text={`Loading Lvl ${lvl.nr}`} />}
      </StyledBoard>
    </StyledMain>
  );
}

import { useState, useEffect } from 'react';
import { Wrapper } from './shared/Layout';
import { GameHeader } from './GameHeader';
import { GameBoard } from './GameBoard';
import { Loading } from './shared/Loading';
import { GameOver } from './GameOver';
import { Status } from './shared/Status';
import { useScore, useLvl, useCards, useKnownCards } from './hooks';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [
    hasCardWithId,
    addCardWithId,
    knowsAllCards,
    resetKnownCards
  ] = useKnownCards();
  const [cards, shuffleCards, updateCards] = useCards();
  const [lvl, nextLvl, resetLvl] = useLvl();
  const [score, bestScore, updateScore, resetScore] = useScore();

  // get cards on new lvl
  useEffect(async () => {
    await updateCards(lvl.cardsCount);
    setIsLoading(false);
  }, [lvl]);

  const handleCardClick = (id) => {
    // player has memorized
    if (!hasCardWithId(id)) {
      addCardWithId(id);
      updateScore(1);

      //check player progress for next lvl
      if (knowsAllCards(lvl.cardsCount)) {
        resetKnownCards();
        setIsLoading(true);
        nextLvl();
      } else {
        shuffleCards();
      }
    } else {
      setIsGameOver(true);
    }
  };

  const handleNewGameClick = () => {
    setIsGameOver(false);
    setIsLoading(true);
    resetKnownCards();
    resetScore();
    resetLvl();
  };

  return (
    <Wrapper>
      <Loading text={`Loading Lvl ${lvl.nr}`} show={isLoading} />
      <GameOver
        score={score}
        onNewGameClick={handleNewGameClick}
        show={isGameOver}
      />
      <GameHeader score={score} bestScore={bestScore} />
      <Status text={`Choose your next Pokemon! Lvl ${lvl.nr}`} />
      <GameBoard cards={cards} onCardClick={handleCardClick} />
    </Wrapper>
  );
}

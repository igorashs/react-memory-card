import { useState } from 'react';
import { useCards } from './useCards';
import { useLvl } from './useLvl';
import { useKnownCards } from './useKnownCards';
import { useScore } from './useScore';

export const useGame = () => {
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

  const startLvl = async () => {
    await updateCards(lvl.cardsCount);
    setIsLoading(false);
  };

  const handleCardChoice = (id) => {
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

  const startNewGame = () => {
    setIsGameOver(false);
    setIsLoading(true);
    resetKnownCards();
    resetScore();
    resetLvl();
  };

  return [
    lvl,
    isLoading,
    isGameOver,
    cards,
    score,
    bestScore,
    startLvl,
    handleCardChoice,
    startNewGame
  ];
};

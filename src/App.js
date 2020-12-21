import { useState, useEffect } from 'react';
import { Wrapper } from './shared/Layout';
import { GameHeader } from './GameHeader';
import { GameBoard } from './GameBoard';
import { Loading } from './shared/Loading';
import { GameOver } from './GameOver';
import { Status } from './shared/Status';
import { useScore } from './hooks/useScore';
import CardsCollection from './lib/CardsCollection';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [knownCards, setKnownCards] = useState([]);
  const [cards, setCards] = useState(null);
  const [lvl, setLvl] = useState({ cardsCount: 4, nr: 1 });
  const [score, bestScore, updateScore, resetScore] = useScore();

  // get cards on new lvl
  useEffect(async () => {
    const newCards = await CardsCollection.getCardsBriefInfo(lvl.cardsCount);
    setCards(newCards);
    setIsLoading(false);
  }, [lvl]);

  //check player progress for next lvl
  useEffect(() => {
    if (knownCards.length && knownCards.length === lvl.cardsCount) {
      setLvl((prevLvl) => {
        let cardsCount = prevLvl.cardsCount < 12 ? prevLvl.cardsCount + 2 : 12;
        let nr = prevLvl.nr + 1;

        return { cardsCount, nr };
      });

      setKnownCards([]);
      setCards(null);
      setIsLoading(true);
    }
  }, [knownCards]);

  const handleCardClick = (id) => {
    const foundSameCard = knownCards.find((cardId) => cardId === id)
      ? true
      : false;

    // player has memorized
    if (!foundSameCard) {
      setKnownCards((prevKnownCards) => {
        let knownCards = [...prevKnownCards];
        knownCards.push(id);

        return knownCards;
      });

      setCards((prevCards) => CardsCollection.shuffleCards(prevCards));

      // update score
      updateScore(1);
    } else {
      setIsGameOver(true);
    }
  };

  const handleNewGameClick = () => {
    setIsGameOver(false);
    setIsLoading(true);
    setKnownCards([]);
    resetScore();
    setCards(null);
    setLvl({ cardsCount: 4, nr: 1 });
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

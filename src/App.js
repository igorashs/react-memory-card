import { useState, useEffect } from 'react';
import { Wrapper } from './shared/Layout';
import { GameHeader } from './GameHeader';
import { GameBoard } from './GameBoard';
import { Loading } from './shared/Loading';
import { GameOver } from './GameOver';
import CardsCollection from './lib/CardsCollection';

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [knownCards, setKnownCards] = useState([]);
  const [cards, setCards] = useState();
  const [lvl, setLvl] = useState({ cardsCount: 4, nr: 1 });
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // get cards on new lvl
  useEffect(async () => {
    const newCards = await CardsCollection.getCardsBriefInfo(lvl.cardsCount);
    setCards(newCards);

    // first app load
    if (!appLoaded) {
      setAppLoaded(true);
    }
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
      setScore((prevScore) => {
        const score = prevScore + 1;

        if (score > bestScore) {
          setBestScore(score);
        }

        return score;
      });
    }

    // game over
    if (foundSameCard) {
      setIsGameOver(true);
    }
  };

  const handleNewGameClick = () => {
    setIsGameOver(false);
    setKnownCards([]);
    setScore(0);
    setCards(null);
    setLvl({ cardsCount: 4, nr: 1 });
  };

  return (
    <Wrapper>
      {!appLoaded && <Loading text='Loading..' />}
      {isGameOver && (
        <GameOver score={score} onNewGameClick={handleNewGameClick} />
      )}

      <GameHeader score={score} bestScore={bestScore} />
      <GameBoard
        cards={cards}
        onCardClick={handleCardClick}
        lvl={lvl}
        appLoaded={appLoaded}
      />
    </Wrapper>
  );
}

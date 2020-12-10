import { useState, useEffect } from 'react';
import CardsCollection from '../../lib/CardsCollection';
import Layout, { Header, Main } from '../Layout';
import logoSrc from '../../assets/eevee-logo.png';
import Logo from '../Layout/Logo';
import GameBoard, { Card } from '../GameBoard';
import Status from '../Status';
import Loading from '../Loading';
import Scoreboard from '../Scoreboard';
import GameOver from '../GameOver';

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
    <Layout>
      <Header>
        <Logo src={logoSrc} />
        <h1>PokeMemory!</h1>
        <Scoreboard score={score} bestScore={bestScore} />
      </Header>
      {!appLoaded && <Loading text='Loading..' />}
      {isGameOver && (
        <GameOver score={score} onNewGameClick={handleNewGameClick} />
      )}
      <Main>
        <Status text={`Choose your next Pokemon! Lvl ${lvl.nr}`} />
        <GameBoard>
          {cards
            ? cards.map((card) => (
                <Card key={card.id} card={card} onCardClick={handleCardClick} />
              ))
            : appLoaded && <Loading text={`Loading Lvl ${lvl.nr}`} />}
        </GameBoard>
      </Main>
    </Layout>
  );
}

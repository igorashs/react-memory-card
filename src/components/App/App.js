import { useState, useEffect } from 'react';
import CardsCollection from '../../lib/CardsCollection';
import Layout, { Header, Main } from '../Layout';
import logoSrc from '../../assets/eevee-logo.png';
import Logo from '../Layout/Logo';
import GameBoard, { Card } from '../GameBoard';
import Status from '../Status';
import Loading from '../Loading';
import Scoreboard from '../Scoreboard';

/* 
Levels:
lvl_1: 5 Cards 
lvl_2: 7 Cards
lvl_3: 10 Cards
lvl_4: 12 Cards
...
lvl_*: 12 Cards
*/

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  // TODO set to [] after each lvl, or when game over (same card!), Cards counts per level!
  // const [knownCards, setKnownCards] = useState([]);
  // TODO set to new cards after each lvl when knwonCards == cards
  const [cards, setCards] = useState();
  // TODO incriment to the next lvl
  const [lvl, setLvl] = useState({ cardsCount: 3 });
  // TODO incriment score on player's new memorized card +1!
  const [score, setScore] = useState(0);
  // TODO change when score > bestScore
  const [bestScore, setBestScore] = useState(0);

  // onMount
  useEffect(async () => {
    const newCards = await CardsCollection.getCardsBriefInfo(lvl.cardsCount);
    setCards(newCards);
    setAppLoaded(true);
  }, []);

  const handleCardClick = (id) => {
    console.log(id);
  };

  return (
    <Layout>
      <Header>
        <Logo src={logoSrc} />
        <h1>PokeMemory!</h1>
        <Scoreboard score={score} bestScore={bestScore} />
      </Header>
      {!appLoaded && <Loading text='Loading..' />}
      <Main>
        <Status text='Choose your next Pokemon!' />
        <GameBoard>
          {cards
            ? cards.map((card) => (
                <Card key={card.id} card={card} onCardClick={handleCardClick} />
              ))
            : appLoaded && <Loading text='Loading next Lvl!' />}
        </GameBoard>
      </Main>
    </Layout>
  );
}

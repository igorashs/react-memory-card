import { useState } from 'react';
import CardsCollection from '../lib/CardsCollection';

export const useCards = () => {
  const [cards, setCards] = useState(null);

  const shuffleCards = () => {
    setCards((prevCards) => CardsCollection.shuffleCards(prevCards));
  };

  const updateCards = async (count) => {
    const newCards = await CardsCollection.getCardsBriefInfo(count);
    setCards(newCards);
  };

  return [cards, shuffleCards, updateCards];
};

import { useState } from 'react';

const CARDS_STEP = 2;
const MAX_CARDS = 12;
const INITIAL = { cardsCount: 4, nr: 1 };

export const useLvl = () => {
  const [lvl, setLvl] = useState(INITIAL);

  const nextLvl = () => {
    setLvl((prevLvl) => {
      let cardsCount =
        prevLvl.cardsCount < MAX_CARDS
          ? prevLvl.cardsCount + CARDS_STEP
          : MAX_CARDS;
      let nr = prevLvl.nr + 1;

      return { cardsCount, nr };
    });
  };

  const resetLvl = () => {
    setLvl({ ...INITIAL });
  };

  return [lvl, nextLvl, resetLvl];
};

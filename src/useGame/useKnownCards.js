import { useState } from 'react';

export const useKnownCards = () => {
  const [knownCards, setKnownCards] = useState([]);

  const hasCardWithId = (id) =>
    knownCards.find((cardId) => cardId === id) ? true : false;

  const addCardWithId = (id) => {
    setKnownCards((prev) => {
      let knownCards = [...prev];
      knownCards.push(id);

      return knownCards;
    });
  };

  const knowsAllCards = (count) => knownCards.length === count - 1;

  const resetKnownCards = () => {
    setKnownCards([]);
  };

  return [hasCardWithId, addCardWithId, knowsAllCards, resetKnownCards];
};

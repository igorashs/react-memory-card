import { Pokedex } from 'pokeapi-js-wrapper';

const pokedex = new Pokedex();

// Pokemons Interval IDS
const MIN = 1;
const MAX = 898;

// get random start between [1 - 898] (inclusive)
const getRandomizedStart = (quantity) =>
  Math.floor(Math.random() * (MAX - MIN - quantity + 2)) + MIN;

// get start and end interval
const getRandomizedInterval = (quantity, start) => [start, quantity + start];

// get ids from interval
const getIDSFromInterval = (start, end) => {
  let ids = [];

  for (let i = start; i < end; i++) {
    ids.push(i);
  }

  return ids;
};

// fetch cards with ids
const fetchCardsWithIDS = (ids) =>
  Promise.all(ids.map((id) => pokedex.getPokemonByName(id)));

// fetch src imgs
// preload!
const fetchCardsImgs = (cards) =>
  Promise.all(
    cards.map(
      ({ src }) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;

          img.onload = () => resolve(src);
        })
    )
  );

// fetch a specific amount of cards
const getCards = (quantity) => {
  const [start, end] = getRandomizedInterval(
    quantity,
    getRandomizedStart(quantity)
  );
  const ids = getIDSFromInterval(start, end);
  const cards = fetchCardsWithIDS(ids);

  return cards;
};

// fetch a specific amount of cards with a brief information
// name and img
const getCardsBriefInfo = async (quantity) => {
  const cards = await getCards(quantity);

  const brief = cards.map((card) => ({
    id: card.id,
    name: card.name,
    src: card.sprites.other['official-artwork'].front_default
  }));

  await fetchCardsImgs(brief);

  return brief;
};

// get random number from 0 to max not included
const getRandomIndex = (max) => Math.floor(Math.random() * max);

// shuffle the cards;
const shuffleCards = (prevCards) => {
  let cards = [...prevCards];
  const length = cards.length;
  let shuffled = [];
  let r;

  for (let i = 0; i < length; i += 1) {
    r = getRandomIndex(cards.length);
    shuffled = [...shuffled, ...cards.splice(r, 1)];
  }

  return shuffled;
};

const CardsCollection = {
  getCardsBriefInfo,
  shuffleCards
};

export { CardsCollection as default };

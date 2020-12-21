import { useEffect } from 'react';
import { Wrapper } from './shared/Layout';
import { GameHeader } from './GameHeader';
import { GameBoard } from './GameBoard';
import { Loading } from './shared/Loading';
import { GameOver } from './GameOver';
import { Status } from './shared/Status';
import { useGame } from './useGame';

export default function App() {
  const [
    lvl,
    isLoading,
    isGameOver,
    cards,
    score,
    bestScore,
    startLvl,
    handleCardChoice,
    startNewGame
  ] = useGame();

  useEffect(async () => {
    await startLvl();
  }, [lvl]);

  return (
    <Wrapper>
      <Loading text={`Loading Lvl ${lvl.nr}`} show={isLoading} />
      <GameOver score={score} onNewGameClick={startNewGame} show={isGameOver} />
      <GameHeader score={score} bestScore={bestScore} />
      <Status text={`Choose your next Pokemon! Lvl ${lvl.nr}`} />
      <GameBoard cards={cards} onCardClick={handleCardChoice} />
    </Wrapper>
  );
}

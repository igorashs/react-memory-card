import styled from 'styled-components';

const StyledBoard = styled.div`
  padding: 5px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Score = styled.p`
  color: rgb(188 255 152);
  padding: 5px;
  font-size: 24px;
`;

const BestScore = styled(Score)`
  color: rgb(255 152 152);
`;

const Devider = styled.div`
  height: 24px;
  width: 1px;
  background-color: white;
  margin: 0 10px;
`;

export default function Scoreboard({ score, bestScore }) {
  return (
    <StyledBoard>
      <Score>Score: {score}</Score>
      <Devider />
      <BestScore>Best: {bestScore}</BestScore>
    </StyledBoard>
  );
}

import styled from 'styled-components';

const StyledBoard = styled.div`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px;
  padding: 5px;
`;

export default function GameBoard(props) {
  return <StyledBoard>{props.children}</StyledBoard>;
}

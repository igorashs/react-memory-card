import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 200px;
  position: relative;

  border-radius: 5px;
  border: 3px solid rgb(43 56 41);
  background-color: rgb(64 81 62);
  box-shadow: 0px 1px 4px #585858;
  transition: all 200ms;

  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 200px;
    height: 200px;
  }

  h3 {
    font-size: 24px;
    padding: 0 5px;
    user-select: none;
  }
`;

const Divider = styled.div`
  width: 100%;
  background-color: #333;
  height: 1px;
`;

export default function Card({ card, alt = card.name, onCardClick }) {
  const { name, src, id } = card;

  return (
    <StyledCard onClick={() => onCardClick(id)}>
      <img src={src} alt={alt} draggable='false' />
      <Divider />
      <h3>{name}</h3>
    </StyledCard>
  );
}

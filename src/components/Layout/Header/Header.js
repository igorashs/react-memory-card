import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 60px;
  padding: 10px;
  background-color: var(--secondary);
  border-bottom: 3px solid var(--complimentary);
  box-shadow: inset 0px 5px 6px var(--primary);
`;

export default function Header(props) {
  return <StyledHeader>{props.children}</StyledHeader>;
}

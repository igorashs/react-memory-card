import styled from 'styled-components';

const StyledMain = styled.main`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export default function Main(props) {
  return <StyledMain>{props.children}</StyledMain>;
}

import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--primary);
  color: var(--primary-text);
`;

export default function Layout(props) {
  return <StyledLayout>{props.children}</StyledLayout>;
}

import styled from 'styled-components';

const Text = styled.h2`
  margin-top: 1rem;
  text-decoration: underline;
  text-align: center;
  font-size: 20px;

  @media (min-width: 576px) {
    font-size: 24px;
  }
`;

export function Status({ text }) {
  return <Text>{text}</Text>;
}

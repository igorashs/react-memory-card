import styled from 'styled-components';

const Text = styled.h2`
  margin-top: 1rem;
  text-decoration: underline;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export function Status({ text }) {
  return <Text>{text}</Text>;
}

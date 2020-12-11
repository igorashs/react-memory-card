import styled from 'styled-components';

const Text = styled.h2`
  text-decoration: underline;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export default function Status({ text }) {
  return <Text>{text}</Text>;
}

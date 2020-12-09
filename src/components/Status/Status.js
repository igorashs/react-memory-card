import styled from 'styled-components';

const Text = styled.h2`
  text-decoration: underline;
`;

export default function Status({ text }) {
  return <Text>{text}</Text>;
}

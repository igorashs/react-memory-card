import React from 'react';
import styled from 'styled-components';

export default function App() {
  return (
    <div>
      <Header>
        <p>
          Hello <code>There 0/_</code>
        </p>
      </Header>
    </div>
  );
}

const Header = styled.header`
  background-color: var(--bg-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #fff;
`;

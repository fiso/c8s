import styled, {injectGlobal} from 'styled-components';
import React from 'react';

injectGlobal`
  html {
    font-family: Helvetica, sans-serif;
    height: 100%;
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

const AppWrapper = styled.div`
`;

export function App () {
  return (
    <AppWrapper>
      I am the app
    </AppWrapper>
  );
}

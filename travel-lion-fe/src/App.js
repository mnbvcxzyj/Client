import React from 'react';
import GlobalStyles from './styles/GlobalStyle';
import Router from './Router';
import NormalJoin from './components/Login/NormalJoin';
import NormalJoin2 from './components/Login/NormalJoin2';
import Complete from './components/Login/Complete';

function App() {
  return (
    <>
      <GlobalStyles />
      <NormalJoin />
    </>
  );
}

export default App;

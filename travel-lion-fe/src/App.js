import React from 'react';
import GlobalStyles from './styles/GlobalStyle';
import Router from './Router';
import Login from './components/Login/Login';
import Join from './components/Login/Join';
import NormalJoin from './components/Login/NormalJoin';
import NormalJoin2 from './components/Login/NormalJoin2';

//push 전에 다시 원래대로 돌려좋기
//지금은 내맘대로 수정 함

function App() {
  return (
    <>
      <NormalJoin />
    </>
  );
}

export default App;

import React from 'react';
import GlobalStyles from './styles/GlobalStyle';
import Router from './Router';
import Login from './components/Login/Login';
import Join from './components/Login/Join';

//push 전에 다시 원래대로 돌려좋기
//지금은 내맘대로 수정 함

function App() {
  return (
    <>
      <Join />
    </>
  );
}

export default App;

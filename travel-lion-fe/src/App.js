import React from 'react';
import GlobalStyles from './styles/GlobalStyle';
import Router from './Router';
import AccountManage from './components/MyPage/AccountManage';
import MyPageHeader from './components/MyPage/MyPageHeader';
import MyPageMain from './components/MyPage/MyPageMain';
import OldPasswd from './components/MyPage/OldPasswd';
import ChangePasswd from './components/MyPage/ChangePasswd';
import ChangeName from './components/MyPage/ChangeName';

function App() {
  return (
    <>
      <GlobalStyles />
      <ChangeName />
    </>
  );
}

export default App;

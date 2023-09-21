import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import NewBillPage from './pages/NewBillPage';
import TravelManage from './components/MyPage/TravelManage';
import AccountManage from './components/MyPage/AccountManage';
import BillUpdatePage from './pages/BillUpdatePage';
import BillListPage from './pages/BIllListPage';
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/account" element={<AccountManage />} />
          <Route path="/mypage/travel" element={<TravelManage />} />
          <Route path="/newbill" element={<NewBillPage />} />
          <Route path="/billupdate" element={<BillUpdatePage />} />
          <Route path="/billlist" element={<BillListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

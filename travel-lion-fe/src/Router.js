import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import NewBillPage from './pages/NewBillPage';
import AccountManage from './components/MyPage/AccountManage';
import BillUpdatePage from './pages/BillUpdatePage';
import BillListPage from './pages/BIllListPage';
import EditCategoryPage from './pages/EditCategoryPage';
import NewCategoryPage from './pages/NewCategoryPage';
import TravelAccountBookPage from './pages/TravelAccountBookPage';
import AddSchedulePage from './pages/AddSchedulePage';
import OldPasswd from './components/MyPage/OldPasswd';
import ChangePasswd from './components/MyPage/ChangePasswd';
import ChangeName from './components/MyPage/ChangeName';
import InviteCodePage from './pages/InviteCodePage';
import TravelList from './components/MyPage/TravelList';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 메인페이지 */}
          <Route path="/" element={<MainPage />} />

          {/* 일정 추가 페이지 */}
          <Route path="/addSchedule" element={<AddSchedulePage />} />

          {/* 초대 코드 입력 페이지  */}
          <Route path='/invitecode' element={<InviteCodePage />} />

          {/* 여행별 가계부 페이지 - (첫 화면 및 통화단위 모달)  */}
          <Route
            path="/travelaccountbook"
            element={<TravelAccountBookPage />}
          />

          {/* 여행별 가계부 페이지 - 일정별 가계부 상세  */}
          <Route path="/billlist" element={<BillListPage />} />

          {/* 여행별 가계부 페이지 - 예산 추가 입력 */}
          <Route path="/newbill" element={<NewBillPage />} />

          {/* 여행별 가계부 페이지 - 입력된 세부 예산 수정  */}
          <Route path="/billupdate/:index" element={<BillUpdatePage />} />


          {/* 여행별 가계부 페이지 - 카테고리 추가 입력  */}
          <Route path="/newcate" element={<NewCategoryPage />} />

          {/* 여행별 가계부 페이지 - 카테고리 수정 */}
          <Route path="/editcate" element={<EditCategoryPage />} />


          {/* 마이페이지 */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/account" element={<AccountManage />} />
          <Route
            path="/mypage/account/existingpasswd"
            element={<OldPasswd />}
          />
          <Route
            path="/mypage/account/changepasswd"
            element={<ChangePasswd />}
          />
          <Route
            path="/mypage/account/changename"
            element={<ChangeName />}
          />
          <Route path="/mypage/travellist"
            element={<TravelList />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import NewBillPage from './pages/NewBillPage';
import AccountManage from './components/MyPage/AccountManage';
import BillUpdatePage from './pages/BillUpdatePage';
import BillListPage from './pages/BIllListPage';
import TravelAccountBookPage from './pages/TravelAccountBookPage';
import ModalExtend from './components/TravelAccount/ModalExtend';
import AddSchedulePage from './pages/AddSchedulePage';
import OldPasswd from './components/MyPage/OldPasswd';
import ChangePasswd from './components/MyPage/ChangePasswd';
import ChangeName from './components/MyPage/ChangeName';
import BottomModal from './components/TravelAccount/BottomModal';
import NewCategoryPage from './components/NewCategory/NewCategory';
import EditCategoryPage from './components/EditCategory/EditCategory';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/account" element={<AccountManage />} />
          <Route
            path="/mypage/account/existingpasswd"
            element={<OldPasswd />}
          />
          <Route
            path="/mypage/account/changepasswd"
            element={<ChangePasswd />}
          ></Route>
          <Route
            path="/mypage/account/changename"
            element={<ChangeName />}
          ></Route>
          <Route path="/newbill" element={<NewBillPage />} />
          <Route path="/billupdate/:index" element={<BillUpdatePage />} />
          <Route path="/billlist" element={<BillListPage />} />
          <Route path="/newcate" element={<NewCategoryPage />} />
          <Route path="/editcate" element={<EditCategoryPage />} />
          <Route
            path="/travelaccountbook"
            element={<TravelAccountBookPage />}
          />
          <Route path="/selectunit" element={<ModalExtend />} />
          <Route path="/addSchedule" element={<AddSchedulePage />} />
          <Route path="/currencymodal" element={<BottomModal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

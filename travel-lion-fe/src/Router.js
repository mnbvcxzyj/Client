import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import NewBillPage from './pages/NewBillPage';
import AccountManage from './components/MyPage/AccountManage';
import BillUpdatePage from './pages/BillUpdatePage';
import BillListPage from './pages/BIllListPage';
import EditCategoryPage from './pages/EditCategoryPage';
import RenameCategoryPage from './pages/RenameCategoryPage';
import FollowRequestListPage from './pages/FollowRequestListPage';
import NewCategoryPage from './pages/NewCategoryPage';
import TravelAccountBookPage from './pages/TravelAccountBookPage';
import AddSchedulePage from './pages/AddSchedulePage';
import OldPasswd from './components/MyPage/OldPasswd';
import ChangePasswd from './components/MyPage/ChangePasswd';
import ChangeName from './components/MyPage/ChangeName';
import BottomModal from './components/TravelAccount/BottomModal';
import Login from './components/Login/Login';
import Join from './components/Login/Join';
import NormalJoin from './components/Login/NormalJoin';
import NormalJoin2 from './components/Login/NormalJoin2';
import InviteCodePage from './pages/InviteCodePage';
import TravelList from './components/MyPage/TravelList';
import ModalExtend from './components/TravelAccount/ModalExtend';
import FindPasswd from './components/Find/FindPasswd';
import SendEmailComplete from './components/Find/SendEmailComplete';
import Invite from './components/Invite/Invite';
import { AuthProvider } from './api/auth/AuthContext';
import PrivateRoute from './PrivateRoute';
import Complete from './components/Login/Complete';
import NoAccount from './components/MyPage/NoAccount';
import { UserProvider } from './contexts/UserContext';
import { GroupProvider } from './contexts/GroupContext';
import { PlanProvider } from './contexts/PlanContext';
import { CategoryProvider } from './contexts/CategoryContext';
import { CategoryTitleProvider } from './contexts/CategoryTitleContext';

export default function Router() {
  return (
    <>
      <AuthProvider>
        <UserProvider>
          <GroupProvider>
            <PlanProvider>
              <CategoryProvider>
                <CategoryTitleProvider>
                  <BrowserRouter>
                    <Routes>
                      {/* 메인페이지 */}
                      <Route
                        path="/"
                        element={<Navigate to="/login" replace />}
                      />

                      <Route path="/main" element={<MainPage />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/join" element={<Join />} />
                      <Route path="/join/normal" element={<NormalJoin />} />
                      <Route path="/join/normal2" element={<NormalJoin2 />} />
                      <Route path="/join/complete" element={<Complete />} />
                      <Route path="/login/find" element={<FindPasswd />} />
                      <Route
                        path="/login/find/complete"
                        element={<SendEmailComplete />}
                      />

                      {/* 일정 추가 페이지 */}
                      <Route
                        path="/addSchedule"
                        element={<AddSchedulePage />}
                      />

                      {/* 초대 코드 입력 페이지  */}
                      <Route path="/invitecode" element={<InviteCodePage />} />

                      {/* 여행별 가계부 페이지 - (첫 화면 및 통화단위 모달)  */}
                      <Route
                        path="/travelaccountbook/:groupId"
                        element={<TravelAccountBookPage />}
                      />

                      {/* 여행별 가계부 페이지 - 일정별 가계부 상세  */}
                      <Route
                        path="/billlist/:groupId/:planId"
                        element={<BillListPage />}
                      />

                      {/* 여행별 가계부 페이지 - 예산 추가 입력 */}
                      <Route
                        path="/newbill/:groupId/:planId"
                        element={<NewBillPage />}
                      />

                      {/* 여행별 가계부 페이지 - 입력된 세부 예산 수정  */}
                      <Route
                        path="/billupdate/:groupId/:planId/:categoryId"
                        element={<BillUpdatePage />}
                      />

                      {/* 여행별 가계부 페이지 - 카테고리 추가 입력  */}
                      <Route
                        path="/newcate/:groupId/:planId"
                        element={<NewCategoryPage />}
                      />

                      {/* 여행별 가계부 페이지 - 카테고리 편집 */}
                      <Route
                        path="/editcate/:groupId/:planId"
                        element={<EditCategoryPage />}
                      />

                      {/* 여행별 가계부 페이지 - 카테고리 수정 */}
                      <Route
                        path="/renamecate/:groupId/:planId/:categoryId"
                        element={<RenameCategoryPage />}
                      />

                      {/* 여행별 가계부 페이지 - 팔로우 요청 목록 */}
                      <Route
                        path="/followrequest"
                        element={<FollowRequestListPage />}
                      />

                      <Route path="/mypage" element={<MyPage />} />
                      <Route
                        path="/mypage/account"
                        element={<AccountManage />}
                      />
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
                      <Route
                        path="/mypage/account/noaccount"
                        element={<NoAccount />}
                      />
                      <Route path="/selectunit" element={<ModalExtend />} />

                      <Route path="/currencymodal" element={<BottomModal />} />
                      <Route
                        path="/mypage/travellist"
                        element={<TravelList />}
                      />
                      <Route
                        path="/mypage/travellist/invite/:groupId"
                        element={<Invite />}
                      />
                    </Routes>
                  </BrowserRouter>
                </CategoryTitleProvider>
              </CategoryProvider>
            </PlanProvider>
          </GroupProvider>
        </UserProvider>
      </AuthProvider>
    </>
  );
}

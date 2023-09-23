import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyPageHeader from './MyPageHeader';
import ModalLogout from './ModalLogout';
import ModalWithdrawal from './ModalWithdrawal';

const AccountManage = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    // fetch('your-backend-api-url')
    //   .then(response => response.text())
    //   .then(data => setData(data))
    //   .catch(error => console.error('Error fetching data:', error));

    // 지금은 일단 임시로 문자열을 설정
    setData('Hello World!');
  }, []);

  function renderStars() {
    return '*'.repeat(data.length);
  }

  // 로그아웃 모달창 노출 여부 state
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  // 모달창 노출
  const showLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  // 탈퇴 모달창 노출 여부 state
  const [withdrawalModalOpen, setWithdrawalModalOpen] = useState(false);

  // 모달창 노출
  const showWithdrawalModal = () => {
    setWithdrawalModalOpen(true);
  };

  return (
    <>
      <MyPageHeader />
      <Container>
        <ProfileImg />
        <div>
          <Text>닉네임</Text>
          <InputWrapper>
            <ChangeDiv>불러온 닉네임</ChangeDiv>
            <ChangeBtn>
              <ChangeText>변경</ChangeText>
            </ChangeBtn>
          </InputWrapper>
        </div>

        <div>
          <Text>비밀번호</Text>
          <InputWrapper>
            <ChangeDiv>{renderStars()}</ChangeDiv>
            <ChangeBtn>
              <ChangeText>변경</ChangeText>
            </ChangeBtn>
          </InputWrapper>
        </div>

        <LogoutBtn onClick={showLogoutModal}>
          <LogoutText>로그아웃</LogoutText>
          {logoutModalOpen && (
            <ModalLogout setLogoutModalOpen={setLogoutModalOpen} />
          )}
        </LogoutBtn>
        <Withdrawal onClick={showWithdrawalModal}>
          <WithdrawalText>계정 탈퇴</WithdrawalText>
          {withdrawalModalOpen && (
            <ModalWithdrawal setWithdrawalModalOpen={setWithdrawalModalOpen} />
          )}
        </Withdrawal>
      </Container>
    </>
  );
};

export default AccountManage;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  gap: 25px;
`;

const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
  background: url(''), lightgray 50% / cover no-repeat;
`;

//닉네임
const Text = styled.div`
  color: var(--Navy, #001240);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 7px;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 328px;
  height: 54px;
  padding: 15px 18px 14px 18px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  background: #efefef;
`;

const ChangeDiv = styled.div`
  border: none;
  color: var(--Darkgray, #353a40);
  flex-grow: 1;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ChangeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 22px;
  padding: 5px 7px;
  border-radius: 3px;
  background: #05b70c;
`;

const ChangeText = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const LogoutBtn = styled.div`
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #05b70c;
  margin-top: 322px;
  cursor: pointer;
`;

const LogoutText = styled.div`
  position: relative;
  top: 21px;
  left: 138px;
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const Withdrawal = styled.div`
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #05b70c;
  background: #fff;
  cursor: pointer;
`;

const WithdrawalText = styled.div`
  position: relative;
  top: 21px;
  left: 136px;
  color: #05b70c;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

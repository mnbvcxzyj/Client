import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyPageHeader from './MyPageHeader';
import ModalLogout from './ModalLogout';
import ModalWithdrawal from './ModalWithdrawal';
import axios from 'axios';

//로그아웃 모달 취소버튼 안 먹힘
const AccountManage = () => {
  const navigate = useNavigate();

  const handlePageNavigation = () => {
    navigate('/mypage/account/existingpasswd');
  };

  const handlePageNavigation2 = () => {
    navigate('/mypage/account/changename');
  };

  const [data, setData] = useState('');

  // 사용자 정보를 상태로 관리
  const [userInfo, setUserInfo] = useState({
    userId: '',
    email: '',
    nickname: '',
    profile: '',
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userId = localStorage.getItem('userId');
        // console.log('내가 불러 온 userId: ' + userId); //ok

        if (!userId) {
          console.error('No userId found');
          return;
        }
        const response = await axios.get(
          `http://13.125.174.198/profile/${userId}/`,
        );

        if (response.status === 200) {
          setUserInfo({
            userId: response.data.userId,
            email: response.data.email,
            nickname: response.data.nickname,
            age: response.data.age,
            profile: response.data.profile,
          });
          // const passwd_length = userInfo.passwd;
          // console.log(userInfo.passwd); //undeefind
          setData('hello'); //임시비번
        } else {
          console.error('Failed to fetch user info:', response.status);
        }
      } catch (error) {
        console.error('There was an error fetching the user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  //비밀번호 * 표시
  function renderStars() {
    return '*'.repeat(data.length);
  }
  const [forceUpdate, setForceUpdate] = useState(0);

  const forceRerender = () => {
    setForceUpdate((prev) => prev + 1);
  };

  // 로그아웃 모달창 노출 여부 state
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  // 모달창 노출
  const showLogoutModal = () => {
    setLogoutModalOpen(true);
    console.log('logoutModalOpen 상태:', logoutModalOpen);
  };

  // 탈퇴 모달창 노출 여부 state
  const [withdrawalModalOpen, setWithdrawalModalOpen] = useState(false);

  // 모달창 노출
  const showWithdrawalModal = () => {
    setWithdrawalModalOpen(true);
  };

  //프로필 이미지 관련 상태
  //지금은 이미지 액박 뜸
  const [profileImage, setProfileImage] = useState(null);
  const inputRef = useRef(null); // input 요소를 참조할 Ref를 생성 및 초기화

  //프로필 이미지 업로드 핸들러
  const handleProfileImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      // 선택한 이미지를 상태에 저장
      setProfileImage(URL.createObjectURL(selectedImage));
    }
  };

  useEffect(() => {
    console.log('AccountManage 컴포넌트 리렌더링');
  });

  return (
    <>
      <MyPageHeader />
      <Container>
        <ProfileImg
          src={userInfo.profile || 'images/basicProfile.jpg'}
          onClick={() => inputRef.current.click()}
        ></ProfileImg>

        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={inputRef}
          onChange={handleProfileImageUpload}
        />
        <div>
          <Text>닉네임</Text>
          <InputWrapper>
            <ChangeDiv>{userInfo.nickname}</ChangeDiv>
            <ChangeBtn onClick={handlePageNavigation2}>
              <ChangeText>변경</ChangeText>
            </ChangeBtn>
          </InputWrapper>
        </div>

        <div>
          <Text>비밀번호</Text>
          <InputWrapper>
            <ChangeDiv>{renderStars()}</ChangeDiv>
            <ChangeBtn onClick={handlePageNavigation}>
              <ChangeText>변경</ChangeText>
            </ChangeBtn>
          </InputWrapper>
        </div>

        <LogoutBtn onClick={showLogoutModal}>
          <LogoutText>로그아웃</LogoutText>
          {logoutModalOpen &&
            (console.log('ModalLogout 렌더링'),
            (
              <ModalLogout
                setLogoutModalOpen={setLogoutModalOpen}
                forceRerender={forceRerender}
              />
            ))}
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

const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
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
  background: #00bc78;
  cursor: pointer;
`;

const ChangeText = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const LogoutBtn = styled.div`
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #00bc78;
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
  border: 1px solid #00bc78;
  background: #fff;
  cursor: pointer;
`;

const WithdrawalText = styled.div`
  position: relative;
  top: 21px;
  left: 136px;
  color: #00bc78;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyPageHeader from './MyPageHeader';
import ModalLogout from './ModalLogout';
import ModalWithdrawal from './ModalWithdrawal';
import axios from 'axios';
import { useAuth } from '../../api/auth/AuthContext';

//로그아웃 모달 취소버튼 안 먹힘
//프로필 이미지 DB 저장
//비밀번호 변경...
const AccountManage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handlePageNavigation = () => {
    navigate('/mypage/account/existingpasswd');
  };

  const handlePageNavigation2 = () => {
    navigate('/mypage/account/changename');
  };

  const [data, setData] = useState('');

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
          {
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
            },
          },
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
          setData('passwd'); //임시비번
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

  //프로필 이미지 관련 상태
  const [profileImage, setProfileImage] = useState('');
  const inputRef = useRef(null); // input 요소를 참조할 Ref를 생성 및 초기화
  const [previewImage, setPreviewImage] = useState('');

  //프로필 이미지 업로드 핸들러
  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file); // 파일 객체 저장
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl); // 미리보기 URL 저장
    }
  };

  const handleProfileImageSubmit = async () => {
    const formData = new FormData();
    // input 태그를 통해 선택된 이미지 파일 객체를 FormData에 추가합니다.
    // 'file'은 서버가 요구하는 필드 키(key)로 가정합니다.
    formData.append('file', profileImage);
    const userId = localStorage.getItem('userId');

    try {
      const response = await axios.patch(
        `http://13.125.174.198/profile/${userId}/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user?.accessToken}`, // 실제 토큰 값으로 대체해야 합니다.
          },
        },
      );

      console.log(formData);
      if (response.status === 200) {
        // 성공적으로 업로드된 경우, 응답을 처리합니다.
        console.log('프로필 이미지가 업데이트되었습니다:', response.data);
        // 추가적인 상태 업데이트나 사용자에게 알림 등의 처리를 할 수 있습니다.
      }
    } catch (error) {
      console.error('프로필 이미지 업데이트 중 오류가 발생했습니다:', error);
      // 오류 처리 로직
    }
  };

  return (
    <>
      <MyPageHeader />
      <Container>
        <ProfileImg
          //원래 src={profileImage}
          src={previewImage || userInfo.profile || '/images/basicProfile.jpg'}
          onClick={() => inputRef.current.click()}
        ></ProfileImg>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={inputRef}
          onChange={handleProfileImageUpload}
        />
        <button onClick={handleProfileImageSubmit}>이미지 업로드</button>
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
          {logoutModalOpen && (
            <ModalLogout
              setLogoutModalOpen={setLogoutModalOpen}
              logoutModalOpen={logoutModalOpen}
            />
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

const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  margin: auto;
  display: block;
  cursor: pointer;
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

import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MyPageHeader from './MyPageHeader';
import ModalLogout from './ModalLogout';
import ModalWithdrawal from './ModalWithdrawal';
import axios from 'axios';
import { useAuth } from '../../api/auth/AuthContext';

//프로필 이미지 DB 저장
//비밀번호 변경...
const AccountManage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handlePageNavigation = () => {
    navigate('/mypage/account/existingpasswd', {
      state: { userId: userInfo.userId },
    });
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
          setData('passwd'); //임시비번 표시를 해야해서 get밖에 못 씀
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
    if (!profileImage) {
      alert('이미지를 선택해주세요.');
      return;
    }

    if (!profileImage.type.startsWith('image/')) {
      alert('이미지 파일만 업로드할 수 있습니다.');
      return;
    }

    const maxFileSize = 5 * 1024 * 1024; // 5MB
    if (profileImage.size > maxFileSize) {
      alert('파일 크기가 너무 큽니다. 5MB 이하의 파일을 업로드해주세요.');
      return;
    }

    const formData = new FormData(); //객체 생성
    formData.append('file', profileImage); //키,값 쌍 추가
    const userId = localStorage.getItem('userId');

    for (let [key, value] of formData.entries()) {
      console.log('키, 값', key, value); // formData 내용 확인 ok
    }

    try {
      const response = await axios.patch(
        `http://13.125.174.198/profile/${userId}/`,
        formData, // 직접 formData 객체를 전달
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user?.accessToken}`,
          },
        },
      );

      console.log('서버 응답:', response.data); // 서버 응답 구조 확인

      if (response.status === 200) {
        // console.log('프로필 이미지가 업데이트되었습니다:', response.data);
        // const updatedImageUrl = `${
        //   response.data.newProfileImageUrl
        // }?${new Date().getTime()}`;
        // setUserInfo((prevUserInfo) => ({
        //   ...prevUserInfo,
        //   profile: updatedImageUrl,
        // }));
        // setPreviewImage(updatedImageUrl);

        // setUserInfo((prevUserInfo) => ({
        //   ...prevUserInfo,
        //   profile: response.data.newProfileImageUrl,
        // }));
        // setPreviewImage(response.data.newProfileImageUrl);

        const updatedImageUrl = `${
          response.data.profile
        }?${new Date().getTime()}`;

        setUserInfo((prevUserInfo) => {
          const updatedUserInfo = { ...prevUserInfo, profile: updatedImageUrl };
          console.log('Updated User Info:', updatedUserInfo); // 새로운 상태 확인
          return updatedUserInfo;
        });

        setPreviewImage(updatedImageUrl);
        console.log('Updated Preview Image:', updatedImageUrl); // 미리보기 이미지 URL 확인

        alert('프로필 이미지가 업데이트 되었습니다.');
      }
    } catch (error) {
      console.error('프로필 이미지 업데이트 중 오류가 발생했습니다:', error);
    }
  };

  return (
    <>
      <MyPageHeader />
      <Container>
        <ProfileImg
          //원래 src={profileImage}
          src={
            profileImage
              ? URL.createObjectURL(profileImage)
              : '/images/basicProfile.jpg'
          }
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

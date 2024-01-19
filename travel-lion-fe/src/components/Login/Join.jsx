import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../api/auth/AuthContext';

function Join() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleJoinClick = () => {
    navigate('/join/normal');
  };

  const kakaoLogin = async () => {
    try {
      const response = await axios.post(
        'http://13.125.174.198/kakao/login/finish/',
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        },
      );
      if (response.data) {
        console.log(response.status);
      }
    } catch (error) {
      console.error('카카오 실패:', error);
    }
  };

  const REST_API_KEY = 'e759fdee9be98fb5ddf70600b0b21aa0';
  const REDIRECT_URI = 'http://13.125.174.198/kakao/callback/';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <div>
      <Box onClick={handleJoinClick}>
        <Text>회원가입</Text>
      </Box>
      <Box onClick={loginHandler}>
        <Image src={`/images/kakao.png`} alt="Kakao"></Image>
        <Text>카카오톡으로 시작</Text>
      </Box>
      <Box>
        <Image src={`/images/google.png`} alt="Google"></Image>
        <Text>구글로 시작</Text>
      </Box>
      <Box>
        <Image src={`/images/naver.png`} alt="Naver"></Image>
        <Text>네이버로 시작</Text>
      </Box>
    </div>
  );
}

export default Join;

const Box = styled.div`
  position: relative;
  top: 324px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 340px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 0.8px solid var(--Gray, #adb6bd);
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;
  cursor: pointer;
`;

const Text = styled.div`
  color: var(--Black, #000);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const Image = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  left: 10px;
  cursor: pointer;
`;

import { useEffect, useState, useRef } from 'react';
import styles from './ModalBasic.module.css';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../api/auth/AuthContext';

function ModalLogout({ setLogoutModalOpen, forceRerender }) {
  // Modal 창을 useRef로 취득
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // AuthContext에서 user, logout 함수 가져옴

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setLogoutModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const closeModal = () => {
    setLogoutModalOpen(false);
    forceRerender(); // 강제 리렌더링 호출
  };

  // 로그아웃 처리 함수
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://13.125.174.198/logout/', {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      });
      if (response.status === 201) {
        console.log('로그아웃 성공');
        logout();
        navigate('/login');
      }
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
      logout();
      navigate('/login');
    }
    // 모달 창 닫기
    setLogoutModalOpen(false);
  };

  return (
    <div className={styles.mcontainer}>
      <WhiteDiv ref={modalRef}>
        <Text>로그아웃 하시겠습니까?</Text>
        <CheckBtn onClick={handleLogout}>
          <CheckText>확인</CheckText>
        </CheckBtn>
        <CancelBtn onClick={closeModal}>
          <CancelText>취소</CancelText>
        </CancelBtn>
      </WhiteDiv>
    </div>
  );
}
export default ModalLogout;

const WhiteDiv = styled.div`
  width: 280px;
  height: 129px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 10px;
`;

const Text = styled.div`
  color: var(--Darkgray, #353a40);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 25px;
`;

const CheckBtn = styled.button`
  width: 103px;
  height: 35px;
  border-radius: 6px;
  background: #00bc78;
  margin-top: 22px;
  margin-right: 13px;
  margin-left: 31px;
`;

const CancelBtn = styled.button`
  width: 103px;
  height: 35px;
  border-radius: 6px;
  border: 1px solid #00bc78;
  background: #fff;
`;

const CheckText = styled.div`
  width: 22px;
  height: 13px;
  flex-shrink: 0;
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: auto;
`;

const CancelText = styled.div`
  width: 22px;
  height: 13px;
  flex-shrink: 0;
  color: #00bc78;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: auto;
`;

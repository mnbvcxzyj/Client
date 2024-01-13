import { useEffect, useRef } from 'react';
import styles from './ModalBasic.module.css';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../api/auth/AuthContext';

function ModalBasic({ setWithdrawalModalOpen }) {
  const closeModal = () => {
    setWithdrawalModalOpen(false); //state변경하면 렌더링 되는거 아니었냐고!!!
    console.log('취소 버튼 클릭');
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setWithdrawalModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // 탈퇴 API 호출 함수
  const handleWithdrawalConfirm = async () => {
    try {
      const response = await axios.delete('http://13.125.174.198/withdrawal/', {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      });

      if (response.status === 200) {
        console.log('탈퇴 처리 성공');
        navigate('/mypage/account/noaccount');
      }
    } catch (error) {
      console.error('탈퇴 처리 중 오류 발생:', error);
    }
  };

  return (
    <div className={styles.mcontainer}>
      <WhiteDiv ref={modalRef}>
        <Text>계정을 탈퇴하시겠습니까?</Text>
        <CheckBtn onClick={handleWithdrawalConfirm}>
          <CheckText>확인</CheckText>
        </CheckBtn>
        <CancelBtn>
          <CancelText>취소</CancelText>
        </CancelBtn>
      </WhiteDiv>
    </div>
  );
}
export default ModalBasic;

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

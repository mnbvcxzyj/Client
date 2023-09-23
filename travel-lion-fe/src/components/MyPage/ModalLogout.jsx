import { useEffect, useRef } from 'react';
import styles from './ModalBasic.module.css';
import styled from 'styled-components';

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
  background: #05b70c;
  margin-top: 22px;
  margin-right: 13px;
  margin-left: 31px;
`;

const CancelBtn = styled.button`
  width: 103px;
  height: 35px;
  border-radius: 6px;
  border: 1px solid #05b70c;
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
  color: #05b70c;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: auto;
`;

function ModalBasic({ setLogoutModalOpen }) {
  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  const closeModal = () => {
    setLogoutModalOpen(false); //state변경하면 렌더링 되는거 아니었냐고!!!
    console.log('취소 버튼 클릭');
  };

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setLogoutModalOpen(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  }, []);

  return (
    // 모달창을 useRef로 잡아준다.
    <div className={styles.mcontainer}>
      <WhiteDiv ref={modalRef}>
        <Text>로그아웃 하시겠습니까?</Text>
        <CheckBtn>
          <CheckText>확인</CheckText>
        </CheckBtn>
        <CancelBtn onClick={closeModal}>
          <CancelText>취소</CancelText>
        </CancelBtn>
      </WhiteDiv>
    </div>
  );
}
export default ModalBasic;

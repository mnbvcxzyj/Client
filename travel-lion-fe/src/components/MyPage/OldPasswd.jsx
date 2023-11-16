import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  justify-content: center;
  align-items: center;
  width: 390px;
  position: relative;
  margin: auto;
`;

const HeaderWrapper = styled.div`
  position: relative;
  width: 390px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
`;

const HeaderBackArrow = styled.div`
  position: relative;
  width: 22px;
  height: 22px;
  left: 25px;
  top: 26px;
`;

const HeaderText = styled.div`
  position: relative;
  margin-left: 150px;
  color: var(--Darkgray, #353a40);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Text = styled.div`
  position: relative;
  margin-top: 219px;
  color: var(--Darkgray, #353a40);
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const PasswdDiv = styled.div`
  width: 340px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1.5px solid var(--Gray, #adb6bd);
  justify-content: center;
  align-items: center;
  display: flex;
  margin: auto;
  top: 33px;
  position: relative;
`;

const PasswdInput = styled.input`
  border: none;
  outline: none;
`;

const Btn = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: auto;
  top: 365px;
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #00bc78;
  cursor: pointer;
`;

const BtnText = styled.div`
  position: relative;
  color: #fff;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

function OldPasswd() {
  const navigate = useNavigate();

  const handlePageNavigation = () => {
    navigate('/mypage/account/changepasswd');
  };

  return (
    <Container>
      <HeaderWrapper>
        <HeaderBackArrow>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M13.8646 19.3415L6.14167 11.6415C6.05 11.5499 5.98492 11.4506 5.94642 11.3436C5.90792 11.2367 5.88898 11.1221 5.88959 10.9999C5.88959 10.8776 5.90853 10.7631 5.94642 10.6561C5.98431 10.5492 6.04939 10.4499 6.14167 10.3582L13.8646 2.63529C14.0785 2.4214 14.3458 2.31445 14.6667 2.31445C14.9875 2.31445 15.2625 2.42904 15.4917 2.6582C15.7208 2.88737 15.8354 3.15473 15.8354 3.46029C15.8354 3.76584 15.7208 4.0332 15.4917 4.26237L8.75417 10.9999L15.4917 17.7374C15.7056 17.9513 15.8125 18.215 15.8125 18.5285C15.8125 18.842 15.6979 19.113 15.4688 19.3415C15.2396 19.5707 14.9722 19.6853 14.6667 19.6853C14.3611 19.6853 14.0938 19.5707 13.8646 19.3415Z"
              fill="#868686"
            />
          </svg>
        </HeaderBackArrow>
        <HeaderText>계정 정보</HeaderText>
      </HeaderWrapper>
      <Text>기존 비밀번호 입력</Text>
      <PasswdDiv>
        <PasswdInput type="password"></PasswdInput>
      </PasswdDiv>
      <Btn onClick={handlePageNavigation}>
        <BtnText>확인</BtnText>
      </Btn>
    </Container>
  );
}

export default OldPasswd;

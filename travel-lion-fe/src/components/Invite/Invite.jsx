import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 390px;
  margin: auto;
`;

const Back = styled.div`
  margin-top: 47px;
  margin-left: 25px;
`;

const Text1 = styled.div`
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 118.336%; /* 28.401px */
  margin-top: 33px;
  margin-left: 37px;
`;

const Text2 = styled.div`
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 118.336%; /* 16.567px */
  margin-top: 40px;
  margin-left: 31px;
`;

const InputEmail = styled.input`
  border: none;
  outline: none;
  background: #f3f3f3;
  margin-top: 15px;
  margin-left: 15px;
  width: 200px;
`;

const DivEmail = styled.div`
  width: 340px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #f3f3f3;
  margin-top: 7px;
  margin-left: 25px;
`;

const BtnInvite = styled.button`
  display: inline-flex;
  padding: 5px 7px;
  margin: 0px 0px 0px 80px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #00bc78;
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const DropdownContainer = styled.div`
  width: 340px;
  height: 50px;
  margin-top: 20px;
  margin-left: 26px;
  border-radius: 5px;
  border: none;
  background: #f3f3f3;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #adb6bd;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Dropdown = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  //   -moz-appearance: none;
  //   -webkit-appearance: none;
  //   appearance: none;
  background: transparent;
  padding: 0;
  margin: 0;
  font-family: Pretendard;
  font-size: 16px;
  cursor: pointer;
  position: absolute; // DropdownContainer 안에서 절대 위치
  top: 0;
  left: 0;
  opacity: 0; // 드롭다운 요소를 숨김
`;

const ArrowIcon = styled.div`
  position: absolute;
  left: 15px; // 왼쪽에서 15px 떨어진 곳에 위치
  top: 50%;
  transform: translateY(-50%);
`;

const SelectedValue = styled.div`
  position: absolute;
  left: 15px;
  right: 30px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: var(--Darkgray, #353a40);
`;

function Invite() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  return (
    <Container>
      <Back>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M13.8647 19.3415L6.14175 11.6415C6.05008 11.5499 5.985 11.4506 5.9465 11.3436C5.908 11.2367 5.88905 11.1221 5.88966 10.9999C5.88966 10.8776 5.90861 10.7631 5.9465 10.6561C5.98438 10.5492 6.04947 10.4499 6.14175 10.3582L13.8647 2.63529C14.0786 2.4214 14.3459 2.31445 14.6667 2.31445C14.9876 2.31445 15.2626 2.42904 15.4917 2.6582C15.7209 2.88737 15.8355 3.15473 15.8355 3.46029C15.8355 3.76584 15.7209 4.0332 15.4917 4.26237L8.75425 10.9999L15.4917 17.7374C15.7056 17.9513 15.8126 18.215 15.8126 18.5285C15.8126 18.842 15.698 19.113 15.4688 19.3415C15.2397 19.5707 14.9723 19.6853 14.6667 19.6853C14.3612 19.6853 14.0938 19.5707 13.8647 19.3415Z"
            fill="#868686"
          />
        </svg>
      </Back>
      <Text1>
        플랜을 누구과
        <br />
        공유하시겠어요?
      </Text1>
      <Text2>초대하기</Text2>
      <DivEmail>
        <InputEmail
          placeholder="이메일 주소를 입력하세요."
          value={email}
          onChange={handleEmailChange}
        ></InputEmail>
        {isValidEmail && <BtnInvite>초대</BtnInvite>}
      </DivEmail>
      <Text2>공유 범위</Text2>
      <DropdownContainer>
        <ArrowIcon />
        <Dropdown value={selectedOption} onChange={handleDropdownChange}>
          <option value="all">모두 수정 가능</option>
          <option value="private">총무만 수정 가능</option>
        </Dropdown>
        <SelectedValue>
          {selectedOption === 'all' ? '모두 수정 가능' : '총무만 수정 가능'}
        </SelectedValue>
      </DropdownContainer>
      <Text2>총무 변경</Text2>
    </Container>
  );
}

export default Invite;

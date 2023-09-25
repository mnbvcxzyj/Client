import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import Alert from '../../images/Newbill/alert.png';

export default function Bill({ value, setValue, showAlert, setShowAlert }) {
  const [inputBill, setInputBill] = useState('');

  useEffect(() => {
    setInputBill(value);
  }, [value]);
  const handleBillChange = (e) => {
    const value = e.target.value;
    setInputBill(value);
    setValue(value);
    if (value !== '') setShowAlert(false);
  };

  return (
    <>
      <InputContainer>
        <Demand>
          사용 금액을 입력해주세요.<Rq>(필수)</Rq>
        </Demand>
        <InputBillWrapper>
          <InputBill
            type="number"
            value={inputBill}
            onChange={handleBillChange}
            $error={showAlert}
          />
          {showAlert ? <Alertimg src={Alert} /> : null}
        </InputBillWrapper>
      </InputContainer>
    </>
  );
}

const InputContainer = styled.div`
  width: 87%;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 70px;
`;

const Demand = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #525252;
  margin-top: 35px;
`;

const Rq = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;

  width: 29px;
  height: 14px;
`;

const InputBillWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputBill = styled.input`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.$error ? 'red' : '#05b70c')};
  cursor: pointer;
  padding: 15px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  decoration: hidden;
`;

const TextareaMemo = styled.textarea`
  width: 100%;
  resize: none;
  overflow: hidden;

  background-color: #f3f3f3;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#05b70c')};
  cursor: pointer;

  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  padding: 15px;
`;

const Alertimg = styled.img`
  position: absolute;
  right: 11px;
  width: 19px;
  height: 19px;
`;

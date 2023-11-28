import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';

export default function Bill({ setValue }) {
  const [inputBill, setInputBill] = useState('');
  const [billError, setBillError] = useState(false);

  const handleBillChange = (e) => {
    const value = e.target.value;
    setInputBill(value);
    setBillError(value === '');

    setValue(value);
  };

  return (
    <>
      <InputContainer>
        <Demand>
          사용 금액을 입력해주세요.<Rq>(필수)</Rq>
        </Demand>
        <InputBill
          type="number"
          value={inputBill}
          onChange={handleBillChange}
          error={billError}
        />
      </InputContainer>
    </>
  );
}

const InputContainer = styled.div`
  /* width: 87%;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 70px; */

  display: flex;
  flex-direction: column;
`;

const Demand = styled.p`
  /* font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #525252;
  margin-top: 35px; */

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #525252;
  margin-top: 30px;
`;

const Rq = styled.span`
  color: #888;

  /* H5 */
  margin-left: 5px;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const InputBill = styled.input`
  background-color: #f3f3f3;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#05b70c')};
  cursor: pointer;
  width: 340px;
  height: 50px;
  flex-shrink: 0;

  /* type="number"
  inputMode="numeric" // 숫자만 입력 가능, 숫자를 조절할 수 있는 버튼은 숨김
  value={inputBill}
  onChange={handleBillChange}
  error={billError} */

  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
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
import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';

export default function BillUpdate({ onBillChange }) {
  const [inputBill, setInputBill] = useState('');
  const [inputMemo, setInputMemo] = useState('');
  const [billError, setBillError] = useState(false);
  const [memoError, setMemoError] = useState(false);

  const handleBillChange = (e) => {
    const value = e.target.value;
    setInputBill(value);
    setBillError(value === '');

    const billInfo = {
      bill: value,
      memo: inputMemo,
    };
    onBillChange(billInfo);
  };

  const handleMemoChange = (e) => {
    const value = e.target.value;
    setInputMemo(value);
    setMemoError(value === '');
  };

  //메모 부분 넓이 변경 코드//
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // 높이 초기화
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 실제 컨텐츠 높이로 설정
    }
  }, [inputMemo]);

  return (
    <>
      <InputContainer>
        <Demand>
          사용 금액을 입력해주세요.<Rq>(필수)</Rq>
        </Demand>
        <InputBill
          type="number" // 숫자만 입력 받도록 타입 변경
          value={inputBill}
          onChange={handleBillChange}
          error={billError}
        />
        <Demand>
          메모사항<Rq>(선택)</Rq>
        </Demand>
        <TextareaMemo
          rows="1"
          ref={textareaRef}
          value={inputMemo}
          onChange={handleMemoChange}
          error={memoError}
        />
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

const InputBill = styled.input`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#05b70c')};
  cursor: pointer;
  padding: 15px;

  type="number"
  inputMode="numeric" // 숫자만 입력 가능, 숫자를 조절할 수 있는 버튼은 숨김
  value={inputBill}
  onChange={handleBillChange}
  error={billError}

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

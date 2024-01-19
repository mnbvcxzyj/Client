import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import Alert from '../../images/Newbill/alert.png';

export default function Bill({ value, setValue, showAlert, setShowAlert }) {
  const [inputBill, setInputBill] = useState('');

  useEffect(() => {
    setInputBill(value);
  }, [value]);

  const handleBillChange = (e) => {
    const rawValue = e.target.value;

    const numericValue = parseFloat(rawValue.replace(/[^0-9]/g, ''));

    if (!isNaN(numericValue)) {
      const formattedValue = numericValue.toLocaleString();

      setInputBill(formattedValue);
      setValue(numericValue);
      setShowAlert(false);
    } else {
      setInputBill('');
      setValue(null);
      setShowAlert(true);
    }
  };

  return (
    <>
      <InputContainer>
        <Demand>
          사용 금액을 입력해주세요.<Rq>(필수)</Rq>
        </Demand>
        <InputBillWrapper>
          <InputBill
            type="text"
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

const InputBillWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputBill = styled.input`
  background-color: #f3f3f3;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.$error ? 'red' : '#f3f3f3')};
  cursor: pointer;
  width: 340px;
  height: 50px;
  flex-shrink: 0;

  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  padding: 17px;
`;

const Alertimg = styled.img`
  position: absolute;
  right: 20px;
  width: 19px;
  height: 19px;
`;

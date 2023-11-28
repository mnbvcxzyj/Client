import React from 'react';
import { styled } from 'styled-components';
import WImg from '../../images/BillList/wIMg.png';

export default function Wallet() {
  return (
    <>
      <Container>
        <WalletImg src={WImg} />
        <Person> 1인 비용 </Person> <Total>/ 총 사용 비용</Total>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  background-color: #f3f3f3;
`;

const WalletImg = styled.img`
  width: 20px;
  height: 16px;
`;
const Person = styled.span`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
  margin: 2px;

  color: #05b70c;
`;
const Total = styled.span`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
  margin: 2px;

  color: linear-gradient(0deg, #353a40, #353a40);
`;

import React from 'react';
import styled from 'styled-components';
import walletImg from '../../images/BillList/wIMg.png';

import { travelData } from '../../data/TravelData';

const CostPerPerson = () => {
  const firstTravel = travelData[1];
  return (
    <>
      <BackgroundDiv>
        <ImgStyle>
          <WalletImg src={walletImg} alt="지갑이미지"></WalletImg>
        </ImgStyle>
        <PersomCost>{firstTravel.amount}</PersomCost> /&nbsp;
        <TotalCost>{firstTravel.amount}</TotalCost>
      </BackgroundDiv>
    </>
  );
};

export default CostPerPerson;

const BackgroundDiv = styled.div`
  max-width: 390px;
  min-height: 150px;
  padding-top: 24px;
  background-color: #f3f3f3;
  /* padding: 30px; */
  margin: 0 auto;
  text-align: center;
`;

const ImgStyle = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`;

const WalletImg = styled.img`
  width: 20px;
`;

const PersomCost = styled.div`
  display: inline-block;

  color: #00bc78;

  text-align: right;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin: 0 auto;
`;
const TotalCost = styled.div`
  display: inline-block;

  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin: 0 auto;
`;

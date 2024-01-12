import { React, useContext } from 'react';
import styled from 'styled-components';
import walletImg from '../../images/BillList/wImg.png';
import { GroupContext } from '../../contexts/GroupContext';
import { PlanContext } from '../../contexts/PlanContext';

const CostPerPerson = () => {
  const { group } = useContext(GroupContext);
  const { plan } = useContext(PlanContext);

  const memCnt = group.member.length;
  console.log('사람수', memCnt);

  return (
    <>
      <BackgroundDiv>
        <ImgStyle>
          <WalletImg src={walletImg} alt="지갑이미지"></WalletImg>
        </ImgStyle>
        <PersomCost>{plan[0].totalCost / memCnt}원</PersomCost> /&nbsp;
        <TotalCost>{group.budget}원</TotalCost>
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

import React, { useState, useEffect, useContext, useMemo } from 'react';
import styled from 'styled-components';
import walletImg from '../../images/BillList/wImg.png';
import { UserContext } from '../../contexts/UserContext';
import { GroupContext } from '../../contexts/GroupContext';
import { PlanContext } from '../../contexts/PlanContext';
import { useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';

const CostPerPerson = ({ groupId, planId }) => {
  const [travelDatas, setTravelDatas] = useState([]);

  const { refreshAccessToken } = useAuth();

  const { user } = useContext(UserContext);
  const { group } = useContext(GroupContext);
  const { plan, handleChangePlan } = useContext(PlanContext);

  const selectedPlan = plan.find(
    (item) => item.planId === parseInt(planId, 10),
  );

  const axiosInstance = useMemo(
    () => createAxiosInstance(refreshAccessToken),
    [refreshAccessToken],
  );

  useEffect(() => {
    const getCotegory = async () => {
      try {
        const response = await axiosInstance.get(
          `/${user.userId}/grouplist/${groupId}/plan`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          },
        );
        setTravelDatas(response.data);
        console.log(response.data);
        handleChangePlan(response.data);
      } catch (error) {
        console.error('수정하려는 Category 데이터 요청 중 오류 발생:', error);
      }
    };
    getCotegory();
  }, [axiosInstance, user, groupId]);

  const memCnt = group.member.length;
  console.log('사람수', memCnt);

  const formattedIndividualCost = selectedPlan.individualCost.toLocaleString();
  const formattedTotalCost = group.budget.toLocaleString();

  return (
    <>
      <BackgroundDiv>
        <ImgStyle>
          <WalletImg src={walletImg} alt="지갑이미지"></WalletImg>
        </ImgStyle>
        <PersomCost>{formattedIndividualCost}원</PersomCost> /&nbsp;
        <TotalCost>{formattedTotalCost}원</TotalCost>
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

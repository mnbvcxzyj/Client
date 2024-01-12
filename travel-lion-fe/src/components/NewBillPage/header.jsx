//완료

import React, { useContext } from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import goBack from '../../images/goBack.png';
import share from '../../images/share.png';
import auImg from '../../images/AU.png';
import { GroupContext } from '../../contexts/GroupContext';
import { PlanContext } from '../../contexts/PlanContext';

export default function Header({ groupId, planId }) {
  const { group } = useContext(GroupContext);
  const { plan } = useContext(PlanContext);

  console.log('헤더의 그룹', group);
  console.log('헤더의 플랜', plan);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString('ko-KR', {
        month: '2-digit',
        day: '2-digit',
      })
      .replace('.', '/')
      .replace('.', '');
  };

  return (
    <>
      <HeaderContainer>
        <NavLeft to={`/billlist/${group.groupId}/${planId}`}>
          <GoBackImg src={goBack} />
        </NavLeft>
        <TravelInfoDiv>
          <Image src={auImg} />
          <TravelName>{group.title}</TravelName>
          <br />
          <TravelLocation>{`${group.nation}-${group.location} |`}</TravelLocation>
          <TravelDate>
            {formatDate(group.startDate)} ~{formatDate(group.endDate)}
          </TravelDate>
        </TravelInfoDiv>
        <Share to="">
          <ShareImg src={share} />
        </Share>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  width: 390px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  background: #00bc78;
  color: #ffffff;
`;

const NavLeft = styled(NavLink)`
  float: left;
  margin: 20px;
`;

const GoBackImg = styled.img`
  width: 22px;
`;

const Share = styled(NavLink)`
  float: right;
  margin: 20px;
`;

const ShareImg = styled.img`
  width: 18px;
  height: 20px;
  top: 52px;
  left: 343px;
`;

const TravelInfoDiv = styled.div`
  align-items: center;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 26px;
  margin: 3px;
`;

const TravelName = styled.span`
  font-family: Pretendard;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;

const TravelLocation = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
`;

const TravelDate = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
`;

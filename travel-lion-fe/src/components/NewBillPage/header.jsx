import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <NavLeft to="/">뒤로가기</NavLeft>
        <TravelInfoDiv>
          <Image>국기</Image>
          <TravelName>졸업여행</TravelName>
          <br />
          <TravelLocation>호주-시드니</TravelLocation>
          <TravelDate>07.09 ~ 08.01</TravelDate>
        </TravelInfoDiv>
        <Share to="">공유하기</Share>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  background: #3369ff;
  color: #ffffff;
`;

const NavLeft = styled(NavLink)`
  float: left;
`;

const Share = styled(NavLink)`
  float: right;
`;

const TravelInfoDiv = styled.div``;

const Image = styled.image``;

const TravelName = styled.span``;

const TravelLocation = styled.span``;

const TravelDate = styled.span``;

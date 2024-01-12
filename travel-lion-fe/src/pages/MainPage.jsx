import React from 'react';
import styled from 'styled-components';
import ListBlock from '../components/MainPage/ListBlock';
import PlanPlusBtn from '../components/MainPage/PlanPlusBtn';
import Nav from '../components/MainPage/Nav';

export default function MainPage() {
  return (
    <MainContainer>
      <ListBlock />
      <PlanPlusBtn />
      <Nav />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding-bottom: 80px;
`;

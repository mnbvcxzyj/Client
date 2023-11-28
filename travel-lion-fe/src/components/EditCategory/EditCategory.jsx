import React from 'react';
import styled from 'styled-components';
import goBack from '../../images/Newbill/goBackBlack.svg';
import { NavLink } from 'react-router-dom';

const EditCategory = () => {
  return (
    <>
      <Container>
        <GoBack to="/newcate">
          <GoBackImg src={goBack} alt="뒤로가기 이미지" />
        </GoBack>
        <Title>카테고리 편집</Title>
        <CategoryItems>
          <CategoryImg></CategoryImg>
          <CategoryName>식비</CategoryName>
          <CategoryDelBtn>삭제</CategoryDelBtn>
          <CategoryEditBtn>수정</CategoryEditBtn>
        </CategoryItems>
      </Container>
    </>
  );
};

export default EditCategory;

const Container = styled.div`
  width: 390px;

  margin: 0 auto;
`;

const GoBack = styled(NavLink)`
  float: left;
`;

const GoBackImg = styled.img`
  width: 22px;
`;
const Title = styled.div`
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  text-align: center;

  margin: 47px 65px 43px 0px;
`;

const CategoryItems = styled.div``;
const CategoryImg = styled.img``;
const CategoryName = styled.span``;
const CategoryDelBtn = styled.span``;
const CategoryEditBtn = styled.span``;

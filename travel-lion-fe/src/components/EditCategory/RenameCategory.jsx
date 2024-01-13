import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import goBack from '../../images/Newbill/goBackBlack.svg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CategoryTitleContext } from '../../contexts/CategoryTitleContext';

const RenameCategory = ({ groupId, planId, categoryId }) => {
  const navigate = useNavigate();
  const [newCategoryName, setNewCategoryName] = useState('');

  const { categoryTitle, handleChangeCategoryTitle } =
    useContext(CategoryTitleContext);
  console.log(categoryTitle);
  console.log('categoryId:', categoryId);
  console.log('newCategoryName:', newCategoryName);

  const handleEditCategory = () => {
    navigate(`/editcate/${groupId}/${planId}`);
  };

  return (
    <>
      <Container>
        <GoBack to={`/editcate/${groupId}/${planId}`}>
          <GoBackImg src={goBack} alt="뒤로가기 이미지" />
        </GoBack>
        <Title>카테고리 수정</Title>
        <NewCategoryInput
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <PlusBtn onClick={handleEditCategory}>
          <BtnText>확인</BtnText>
        </PlusBtn>
      </Container>
    </>
  );
};

export default RenameCategory;

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

const NewCategoryInput = styled.input`
  width: 340px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #f3f3f3;

  margin-bottom: 22px;
  border: none;
  padding: 10px;
`;

const PlusBtn = styled.div`
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #00bc78;

  color: #fff;

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 35px;
`;

const BtnText = styled.div`
  height: 60px;
  text-align: center;
  vertical-align: middle;
  text-align: center;
  padding: 20px 0;
`;

const GoEditCategory = styled.div`
  color: #525252;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  width: 340px;
  text-align: right;
`;

const GoEdit = styled(NavLink)``;

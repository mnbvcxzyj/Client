import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import goBack from '../../images/Newbill/goBackBlack.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { CategoryTitleContext } from '../../contexts/CategoryTitleContext';

const EditCategory = ({ groupId, planId }) => {
  const navigate = useNavigate();

  const { categoryTitle, handleChangeCategoryTitle } =
    useContext(CategoryTitleContext);

  const handleRenameCategory = (categoryId) => {
    console.log(categoryId);
    navigate(`/renamecate/${groupId}/${planId}/${categoryId}`);
  };

  const handleDeleteCategory = (categoryId) => {
    const newCategoryDataset = categoryTitle.filter(
      (category) => category.id !== categoryId,
    );

    handleChangeCategoryTitle(newCategoryDataset);
  };

  return (
    <>
      <Container>
        <GoBack to={`/newcate/${groupId}/${planId}`}>
          <GoBackImg src={goBack} alt="뒤로가기 이미지" />
        </GoBack>
        <Title>카테고리 편집</Title>
        <CategoryItems>
          {categoryTitle.map((category) => (
            <React.Fragment key={category.id}>
              <CategoryImg
                src={
                  category.img ||
                  'https://img.freepik.com/premium-vector/free-vector-transparent-background_775271-183.jpg'
                }
                alt={`Category ${category.name}`}
              />
              <CategoryName>{category.name}</CategoryName>
              <BtnStyleDiv>
                <CategoryDelBtn
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  삭제
                </CategoryDelBtn>
                <CategoryEditBtn
                  onClick={() => handleRenameCategory(category.id)}
                >
                  수정
                </CategoryEditBtn>
              </BtnStyleDiv>
              <hr />
            </React.Fragment>
          ))}
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

const CategoryItems = styled.div`
  margin: 36px;
`;

const CategoryImg = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin: 5px;
  vertical-align: middle;
  margin: 10px;
`;

const CategoryName = styled.span`
  color: #525252;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 2px;
`;

const BtnStyleDiv = styled.div`
  float: right;
  margin-top: 5px;
`;

const CategoryDelBtn = styled.button`
  display: inline-flex;
  padding: 3.75px 5.75px 3.75px 5.25px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #ff5a50;
  color: #ff5a50;
  background-color: white;
  font-size: 7.5px;
  border-radius: 2.25px;
  align: right;
  margin: 4px;
  vertical-align: middle;
`;

const CategoryEditBtn = styled.button`
  display: inline-flex;
  padding: 3.75px 5.75px 3.75px 5.25px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #00bc78;
  color: #00bc78;
  background-color: white;
  font-size: 7.5px;
  border-radius: 2.25px;
  align: right;
  margin: 4px;
  vertical-align: middle;
`;

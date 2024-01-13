import React, { useState } from 'react';
import styled from 'styled-components';
import goBack from '../../images/Newbill/goBackBlack.svg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NewCategory = ({ groupId, planId }) => {
  const [categoryName, setCategoryName] = useState('');

  const navigate = useNavigate();

  const storedCategoryDataset = sessionStorage.getItem('categoryDataset');
  const parsedCategoryDataset = JSON.parse(storedCategoryDataset);

  //읽어온 데이터 출력
  console.log(parsedCategoryDataset);

  const handleAddCategory = () => {
    if (!categoryName.trim()) {
      console.log('비어있는경우에는 추가할 수 없음');
      return;
    }
    const isDuplicate = parsedCategoryDataset.some(
      (category) => category.name === categoryName,
    );

    if (isDuplicate) {
      console.error('이름이 겹치는 경우에는 추가할 수 없음');
      return;
    }

    const newCategory = {
      id: parsedCategoryDataset.length + 1,
      name: categoryName,
    };

    // 새로운 카테고리를 기존 데이터에 추가
    const updatedCategoryDataset = [...parsedCategoryDataset, newCategory];

    sessionStorage.setItem(
      'categoryDataset',
      JSON.stringify(updatedCategoryDataset),
    );

    navigate(`/newBill/${groupId}/${planId}`);
  };

  return (
    <>
      <Container>
        <GoBack to={`/newbill/${groupId}/${planId}`}>
          <GoBackImg src={goBack} alt="뒤로가기 이미지" />
        </GoBack>
        <Title>카테고리 추가 입력</Title>
        <NewCategoryInput
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <PlusBtn onClick={handleAddCategory}>
          <BtnText>추가</BtnText>
        </PlusBtn>
        <GoEdit to={`/editcate/${groupId}/${planId}`}>
          <GoEditCategory>카테고리 편집 &gt; </GoEditCategory>
        </GoEdit>
      </Container>
    </>
  );
};

export default NewCategory;

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

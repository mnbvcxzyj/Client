import React, { useState } from 'react';
import styled from 'styled-components';

const billDataset = [
  {
    id: 1,
    image: 'image1.jpg',
    authorName: '박신형',
    userImage: 'user1.jpg',
    category: '식비',
    amount: 25000,
    memo: '식사 비용',
  },
  {
    id: 2,
    image: 'image2.jpg',
    authorName: '박신형2',
    userImage: 'user2.jpg',
    category: '교통',
    amount: 15000,
    memo: '대중교통 비용',
  },
  {
    id: 3,
    image: 'image3.jpg',
    authorName: '박신형3',
    userImage: 'user3.jpg',
    category: '쇼핑',
    amount: 75000,
    memo: '의류 구매',
  },
  {
    id: 4,
    image: 'image4.jpg',
    authorName: '박신형4',
    userImage: 'user4.jpg',
    category: '의료',
    amount: 35000,
  },
  {
    id: 5,
    image: 'image5.jpg',
    authorName: '박신형5',
    userImage: 'user5.jpg',
    category: '문화',
    amount: 20000,
    memo: '영화 관람',
  },
  {
    id: 6,
    image: 'image6.jpg',
    authorName: '박신형6',
    userImage: 'user6.jpg',
    category: '기타',
    amount: 10000,
  },
];

export default function Who({ onClickWho }) {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedWho, setSelectedWho] = useState('');

  const onClickOption = (e) => {
    onClickWho(e.target.value);
    setSelectedWho(e.target.innerText);
    setIsDropDown(false);
  };

  const onClickSelect = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <Component>
      <Demand>작성자를 선택해주세요.</Demand>
      <SelectButton type="button" onClick={onClickSelect}>
        {selectedWho || '선택하세요'}
      </SelectButton>
      {isDropDown && (
        <DropDown>
          {billDataset.map((bill) => (
            <Option
              src="../../images/AU.png"
              value={bill.authorName}
              key={bill.id}
              onClick={onClickOption}
            >
              <img src={bill.userImage} alt={bill.authorName} />
              {bill.authorName}
            </Option>
          ))}
        </DropDown>
      )}
    </Component>
  );
}

const Component = styled.div`
  width: 87%;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const Demand = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  text-align: left;

  color: #525252;
  margin-top: 35px;
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #f3f3f3;
  border-radius: 5px;
  border: 1px solid #05b70c;
  cursor: pointer;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;

const DropDown = styled.div`
  width: 87%;
  position: absolute;
  top: 36.7%;
  background-color: #ffffff;
  border-radius: 5px;
  overflow-y: auto;
  box-shadow: 0px 0px 4px 0px #0000004d;
`;

const Option = styled.button`
  width: 100%;
  color: #525252;
  background-color: #ffffff;
  border-radius: 5px;
  text-align: left;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;

  padding: 15px;

  &:hover {
    background-color: #f3f3f3;
    cursor: pointer;
  }
`;

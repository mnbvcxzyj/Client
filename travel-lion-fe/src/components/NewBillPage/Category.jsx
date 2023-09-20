import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryImgFood from '../../images/BillList/userImg.png';
import Triangle from '../../images/Newbill/triangle.png';

const categoryDataset = [
  {
    id: 1,
    name: '식비',
    img: CategoryImgFood,
  },
  {
    id: 2,
    name: '숙소',
    img: CategoryImgFood,
  },
  {
    id: 3,
    name: '교통비',
    img: CategoryImgFood,
  },
  {
    id: 4,
    name: '기타',
    img: CategoryImgFood,
  },
  {
    id: 5,
    name: '직접 입력하기',
    img: CategoryImgFood,
  },
];

export default function Category({ onClickCategory }) {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategoryImg, setSelectedCategoryImg] = useState(null);

  const onClickOption = (e) => {
    const selectedCategoryName = e.target.innerText;

    const selectedCategoryInfo = categoryDataset.find(
      (category) => category.name === selectedCategoryName,
    );

    if (selectedCategoryInfo) {
      onClickCategory(selectedCategoryName);
      setSelectedCategory(selectedCategoryName);
      setSelectedCategoryImg(selectedCategoryInfo.img);
      setIsDropDown(false);
    }
  };

  const onClickSelect = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <Component>
      <Demand>
        {' '}
        &nbsp; 카테고리를 선택해주세요. <Rq>(필수)</Rq>
      </Demand>
      <SelectButton type="button" onClick={onClickSelect}>
        {selectedCategory ? (
          <>
            <tr>
              <td>
                <CategoryImgStyle
                  src={selectedCategoryImg}
                  alt={selectedCategory}
                />
              </td>
              <td style={{ verticalAlign: 'middle' }}>
                <CategoryNameStyle>{selectedCategory}</CategoryNameStyle>
              </td>
            </tr>
          </>
        ) : (
          <Downimg src={Triangle} />
        )}
      </SelectButton>
      {isDropDown && (
        <DropDown>
          {categoryDataset.map((category) => (
            <Option
              value={category.name}
              key={category.id}
              onClick={onClickOption}
              style={{ borderBottom: '0.3px solid #ADB6BD' }}
              //박스 전체 클릭 가능하게 수정해야 됨(지금 글자만 클릭가능 함)
              //어떻게 길이를 짧게 테두리를 만들어?
            >
              <tr>
                <td>
                  <CategoryImgStyle src={category.img} alt={category.name} />
                </td>
                <td style={{ verticalAlign: 'middle' }}>
                  <CategoryNameStyle>{category.name}</CategoryNameStyle>
                </td>
              </tr>
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

const Rq = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;

  width: 29px;
  height: 14px;
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 13px;
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
const Downimg = styled.img`
  width: 10px;
`;

const CategoryImgStyle = styled.img`
  width: 24px;
  height: 24px;
`;

const CategoryNameStyle = styled.span`
  vertical-align: middle;
  padding-left: 5px;
`;

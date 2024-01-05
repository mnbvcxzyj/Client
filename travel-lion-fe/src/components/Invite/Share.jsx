import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryImgFood from '../../images/Newbill/food.png';
import CategoryImgHotel from '../../images/Newbill/hotel.png';
import CategoryImgTransportation from '../../images/Newbill/car.png';
import CategoryImgEtc from '../../images/Newbill/etc.png';
import CategoryImgSelf from '../../images/Newbill/tm.png';
import ImgV from '../../images/Newbill/v.png';
import Triangle from '../../images/Newbill/triangle.png';
import Alert from '../../images/Newbill/alert.png';
import { useNavigate } from 'react-router-dom';

const categoryDataset = [
  {
    id: 1,
    name: '식비',
    img: CategoryImgFood,
  },
  {
    id: 2,
    name: '숙소',
    img: CategoryImgHotel,
  },
  {
    id: 3,
    name: '교통비',
    img: CategoryImgTransportation,
  },
  {
    id: 4,
    name: '기타',
    img: CategoryImgEtc,
  },
  {
    id: 5,
    name: '직접 입력하기',
    img: CategoryImgSelf,
  },
];

export default function Category({ onClickCategory, showAlert, setShowAlert }) {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategoryImg, setSelectedCategoryImg] = useState(null);

  const onClickOption = (name) => {
    const selectedCategoryName = name;

    const selectedCategoryInfo = categoryDataset.find(
      (category) => category.name === selectedCategoryName,
    );

    if (selectedCategoryInfo) {
      onClickCategory(selectedCategoryName);
      setSelectedCategory(selectedCategoryName);
      setSelectedCategoryImg(selectedCategoryInfo.img);
      setIsDropDown(false);
      setShowAlert(false);
    }
  };

  const onClickSelect = () => {
    setIsDropDown(!isDropDown);
  };

  const navigate = useNavigate();

  return (
    <Component>
      <SelectButton
        type="button"
        onClick={onClickSelect}
        isDropDown={isDropDown}
        $error={showAlert}
      >
        {selectedCategory ? (
          <>
            <table>
              <tbody>
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
              </tbody>
            </table>
          </>
        ) : (
          <Downimg src={Triangle} />
        )}
        {showAlert ? <Alertimg src={Alert} /> : null}
      </SelectButton>
      {isDropDown && (
        <DropDown>
          {categoryDataset.map((category) => (
            <Option
              key={category.id}
              onClick={() => {
                //어쩌구,,저쩌구,,
              }}
              isSelected={category.name === selectedCategory}
            >
              {category.name}
              {category.name === selectedCategory && <Checkmark />}
            </Option>
          ))}
        </DropDown>
      )}
    </Component>
  );
}

const Component = styled.div`
  /* width: 87%;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 30px; */

  display: flex;
  flex-direction: column;
`;

const Demand = styled.p`
  /* font-family: Pretendard;
  font-size: 14px;
  font-weight: 500; */
  /* text-align: left; */

  color: #525252;
  margin-top: 30px;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  /* text-align: left; */
`;

const Rq = styled.span`
  color: #888;

  /* H5 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  width: 29px;
  height: 14px;
`;

const SelectButton = styled.button`
  /* width: 100%; */
  /* padding: 13px;
  background-color: #f3f3f3;
  border-radius: 5px; */

  position: relative;
  width: 340px;
  height: 50px;
  cursor: pointer;
  border-radius: 5px;
  background: #f3f3f3;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;

  border: ${(props) =>
    props.isDropDown
      ? '2px solid #05B70C'
      : props.$error
      ? '1px solid red'
      : '1px solid transparent'};
`;

const DropDown = styled.div`
  /* margin-top: 4px;
  width: 87%;
  position: absolute; */

  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px #0000004d;
`;

const Option = styled.button`
  width: 340px;
  height: 50px;
  color: #525252;
  background-color: #ffffff;
  border-radius: 5px;
  /* text-align: left; */
  border-bottom: 0.3px solid #adb6bd;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #f3f3f3;
    cursor: pointer;
  }

  ${(props) =>
    props.isSelected &&
    `
    color: #05b70c;
  `}
`;

const Downimg = styled.img`
  width: 10px;
`;

const CategoryImgStyle = styled.img`
  width: 24px;
  height: 24px;

  margin-left: 20px;
  margin-right: 10px;
`;

const CategoryNameStyle = styled.span`
  vertical-align: middle;
  text-align: left;
  padding-left: 5px;
`;

const CategoryCheaked = styled.img`
  width: 13.96px;
  height: 10.48px;

  vertical-align: middle;
`;

const Alertimg = styled.img`
  position: absolute;
  right: 11px;
  width: 19px;
  height: 19px;
`;

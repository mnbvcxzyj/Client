import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CategoryImgFood from '../../images/Newbill/food.png';
import CategoryImgHotel from '../../images/Newbill/hotel.png';
import CategoryImgTransportation from '../../images/Newbill/car.png';
import CategoryImgEtc from '../../images/Newbill/etc.png';
import CategoryImgSelf from '../../images/Newbill/plusImg.png';
import ImgV from '../../images/Newbill/v.png';
import Triangle from '../../images/Newbill/triangle.png';
import Alert from '../../images/Newbill/alert.png';
import { useNavigate } from 'react-router-dom';

const storedCategoryDataset = sessionStorage.getItem('categoryDataset');

// if (!storedCategoryDataset) {
//   const initialCategoryDataset = [
//     {
//       id: 1,
//       name: '식비',
//       img: CategoryImgFood,
//     },
//     {
//       id: 2,
//       name: '숙소',
//       img: CategoryImgHotel,
//     },
//     {
//       id: 3,
//       name: '교통비',
//       img: CategoryImgTransportation,
//     },
//     {
//       id: 4,
//       name: '기타',
//       img: CategoryImgEtc,
//     },
//   ];

//   // 초기 데이터를 세션 스토리지에 저장
//   sessionStorage.setItem(
//     'categoryDataset',
//     JSON.stringify(initialCategoryDataset),
//   );
// }

const parsedCategoryDataset = JSON.parse(
  sessionStorage.getItem('categoryDataset'),
);

console.log(parsedCategoryDataset);

// export default function Category({
//   onClickCategory,
//   showAlert,
//   setShowAlert,
//   groupId,
//   planId,
// }) {
//   const [isDropDown, setIsDropDown] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedCategoryImg, setSelectedCategoryImg] = useState(null);

//   console.log(groupId, planId);

//   const storedCategoryDataset = JSON.parse(
//     sessionStorage.getItem('categoryDataset') || '[]',
//   );

//   const onClickOption = (name) => {
//     const selectedCategoryName = name;

//     const selectedCategoryInfo = parsedCategoryDataset.find(
//       (category) => category.name === selectedCategoryName,
//     );

//     if (selectedCategoryInfo) {
//       onClickCategory(selectedCategoryName);
//       setSelectedCategory(selectedCategoryName);
//       setSelectedCategoryImg(selectedCategoryInfo.img);
//       setIsDropDown(false);
//       setShowAlert(false);
//     }
//   };

//   const onClickSelect = () => {
//     setIsDropDown(!isDropDown);
//   };

//   const navigate = useNavigate();

export default function Category({
  onClickCategory,
  showAlert,
  setShowAlert,
  groupId,
  planId,
}) {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategoryImg, setSelectedCategoryImg] = useState(null);

  const [storedCategoryDataset, setStoredCategoryDataset] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const updatedCategoryDataset = JSON.parse(
      sessionStorage.getItem('categoryDataset') || '[]',
    );
    setStoredCategoryDataset(updatedCategoryDataset);
  }, [groupId, planId]);

  const onClickOption = (name) => {
    const selectedCategoryName = name;
    const selectedCategoryInfo = parsedCategoryDataset.find(
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

  // const storedCategoryDataset = JSON.parse(
  //   sessionStorage.getItem('categoryDataset') || '[]',
  // );

  return (
    <Component>
      <Demand>
        &nbsp; 카테고리를 선택해주세요. <Rq>(필수)</Rq>
      </Demand>
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
          {storedCategoryDataset.map((category) => (
            <Option
              value={category.name}
              key={category.id}
              onClick={() => {
                if (category.name === '직접 입력하기') {
                  navigate(`/newcate/${groupId}/${planId}`);
                } else {
                  onClickOption(category.name);
                }
              }}
              isSelected={category.name === selectedCategory}
            >
              <tr>
                <td>
                  <CategoryImgStyle src={category.img} alt={category.name} />
                </td>
                <td
                  style={{
                    verticalAlign: 'middle',
                  }}
                >
                  <CategoryNameStyle>{category.name}</CategoryNameStyle>
                </td>
              </tr>
              {category.name === selectedCategory && (
                <CategoryCheaked src={ImgV} />
              )}
            </Option>
          ))}
          <Option
            value="직접 입력하기"
            onClick={() => navigate(`/newcate/${groupId}/${planId}`)}
            isSelected={selectedCategory === '직접 입력하기'}
          >
            <tr>
              <td>
                <CategoryImgStyle src={CategoryImgSelf} alt="직접 입력하기" />
              </td>
              <td
                style={{
                  verticalAlign: 'middle',
                }}
              >
                <CategoryNameStyle>직접 입력하기</CategoryNameStyle>
              </td>
            </tr>
            {selectedCategory === '직접 입력하기' && (
              <CategoryCheaked src={ImgV} />
            )}
          </Option>
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
      ? '2px solid #00bc78'
      : props.$error
      ? '1px solid red'
      : '1px solid transparent'};
`;

const DropDown = styled.div`
  /* margin-top: 4px;
  width: 87%;
  position: absolute; */
  position: absolute;
  top: 396px;

  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px #0000004d;
  width: 340px;
  z-index: 1;
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

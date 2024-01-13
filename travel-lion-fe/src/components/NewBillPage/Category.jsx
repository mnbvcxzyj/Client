import React, { useState, useEffect, useContext } from 'react';
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
import { CategoryTitleContext } from '../../contexts/CategoryTitleContext';
import { CategoryContext } from '../../contexts/CategoryContext';

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
  const navigate = useNavigate();

  const { category, handleChangeCategory } = useContext(CategoryContext);
  console.log(category);
  const { categoryTitle, handleChangeCategoryTitle } =
    useContext(CategoryTitleContext);
  console.log(categoryTitle);

  // 초기값이 비어있는 경우에만 초기값 설정
  useEffect(() => {
    if (categoryTitle.length === 0) {
      const defaultCategories = [
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
      ];
      handleChangeCategoryTitle(defaultCategories);
    }
  }, [categoryTitle, handleChangeCategoryTitle]);

  //초기 카테고리 설정 (카테고리가 비어있지 않은 경우)
  useEffect(() => {
    const newCategoryTitles = Object.values(category).flatMap((arr) => {
      return arr
        .filter(
          (item) => !categoryTitle.some((ct) => ct.name === item.categoryTitle),
        )
        .map((item) => ({ name: item.categoryTitle }));
    });

    if (newCategoryTitles.length > 0) {
      handleChangeCategoryTitle((prev) => [...prev, ...newCategoryTitles]);
    }
  }, [category, categoryTitle, handleChangeCategoryTitle]);

  useEffect(() => {
    handleChangeCategoryTitle(categoryTitle);
  }, [categoryTitle]);

  const onClickOption = (name) => {
    const selectedCategoryName = name;
    const selectedCategoryInfo = categoryTitle.find(
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

  console.log('여기서도 카테고리 배열 불러온거 출력해', categoryTitle);
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
          {categoryTitle.map((category) => (
            <Option
              value={category.name}
              key={category.id}
              onClick={() => {
                onClickOption(category.name);
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

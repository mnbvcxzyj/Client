import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import userImg from '../../images/BillList/userImg.png';
import ImgV from '../../images/Newbill/v.png';
import Triangle from '../../images/Newbill/triangle.png';

const billDataset = [
  {
    id: 1,
    image: 'image1.jpg',
    authorName: '박신형',
    userImage: userImg,
    category: '식비',
    amount: 25000,
    memo: '식사 비용',
  },
  {
    id: 2,
    image: 'image2.jpg',
    authorName: '박신형2',
    userImage: userImg,
    category: '교통',
    amount: 15000,
    memo: '대중교통 비용',
  },
  {
    id: 3,
    image: 'image3.jpg',
    authorName: '박신형3',
    userImage: userImg,
    category: '쇼핑',
    amount: 75000,
    memo: '의류 구매',
  },
  {
    id: 4,
    image: 'image4.jpg',
    authorName: '박신형4',
    userImage: userImg,
    category: '의료',
    amount: 35000,
  },
  {
    id: 5,
    image: 'image5.jpg',
    authorName: '박신형5',
    userImage: userImg,
    category: '문화',
    amount: 20000,
    memo: '영화 관람',
  },
  {
    id: 6,
    image: 'image6.jpg',
    authorName: '박신형6',
    userImage: userImg,
    category: '기타',
    amount: 10000,
  },
];

const savedData = JSON.parse(sessionStorage.getItem('billList')) || [];

export default function Who({ value, onClickWho }) {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedWho, setSelectedWho] = useState('');

  useEffect(() => {
    setSelectedWho(value);
  }, [value]);
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
      <Demand> &nbsp; 작성자를 선택해주세요.</Demand>
      <SelectButton
        type="button"
        onClick={onClickSelect}
        isDropDown={isDropDown}
      >
        {selectedWho ? (
          <>
            <table>
              <tbody>
                <tr>
                  <td>
                    <UserImgStyle
                      src={
                        billDataset.find(
                          (bill) => bill.authorName === selectedWho,
                        )?.userImage || ''
                      }
                      alt={selectedWho}
                    />
                  </td>
                  <td style={{ verticalAlign: 'middle' }}>
                    <UserNameStyle>{selectedWho}</UserNameStyle>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <Downimg src={Triangle} />
        )}
      </SelectButton>
      {isDropDown && (
        <DropDown>
          {billDataset.map((bill) => (
            <Option
              value={bill.authorName}
              key={bill.id}
              onClick={onClickOption}
              isSelected={bill.authorName === selectedWho}
            >
              <tr>
                <td>
                  <UserImgStyle src={bill.userImage} alt={bill.authorName} />
                </td>
                <td
                  style={{
                    verticalAlign: 'middle',
                  }}
                >
                  <UserNameStyle>{bill.authorName}</UserNameStyle>
                </td>
              </tr>
              {bill.authorName === selectedWho && <UserCheaked src={ImgV} />}
            </Option>
          ))}
        </DropDown>
      )}
    </Component>
  );
}

const Component = styled.div`
  /* display: flex;
  width: 340px;
  padding: 10px 237px 5px 13px;
  align-items: center;
  margin: 0 auto; */

  align-items: center;

  /* width: 87%;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 30px; */
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
  width: 340px;
  height: 50px;
  background-color: #f3f3f3;
  border-radius: 5px;
  cursor: pointer;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;

const DropDown = styled.div`
  /* margin-top: 4px;
  width: 87%;
  position: absolute; */
  width: 340px;

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

const UserImgStyle = styled.img`
  width: 24px;
  height: 24px;

  margin-left: 20px;
  margin-right: 10px;
`;

const UserNameStyle = styled.span`
  vertical-align: middle;
  text-align: left;
  padding-left: 5px;
`;

const UserCheaked = styled.img`
  width: 13.96px;
  height: 10.48px;

  vertical-align: middle;
`;

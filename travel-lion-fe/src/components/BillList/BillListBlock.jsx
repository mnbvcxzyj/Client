import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import CategoryImgFood from '../../images/Newbill/food.png';
import CategoryImgHotel from '../../images/Newbill/hotel.png';
import CategoryImgTransportation from '../../images/Newbill/car.png';
import CategoryImgEtc from '../../images/Newbill/etc.png';
import CategoryImgSelf from '../../images/Newbill/white.png';
import Btn from './Btn';

export default function BillListBlock() {
  const categoryImages = {
    식비: CategoryImgFood,
    숙소: CategoryImgHotel,
    교통비: CategoryImgTransportation,
    기타: CategoryImgEtc,
    직접입력하기: CategoryImgSelf,
  };

  const savedData = JSON.parse(sessionStorage.getItem('billList')) || [];

  return (
    <div>
      <BackgroundDiv>
        <Container>
          <DateInfo>
            <Day>
              2일차
              <Date>08/14(월)</Date>
            </Day>
          </DateInfo>
          <hr />
          <BillList>
            {savedData.map((item, index) => (
              <BillItem key={index}>
                <Link to={`/billupdate/${index}`}>
                  <BillInfo>
                    <Table>
                      <tbody>
                        <tr>
                          <td
                            rowSpan={2}
                            style={{
                              textAlign: 'center',
                              width: '70px',
                              verticalAlign: 'middle',
                            }}
                          >
                            <CategoryImgStyle>
                              <BillImage
                                src={categoryImages[item.selectedCategory]}
                                alt={item.selectedCategor}
                              />
                            </CategoryImgStyle>
                          </td>
                          <td
                            style={{
                              width: '130px',
                              borderBottom: '0.4px solid #ADB6BD',
                            }}
                          >
                            <BillCategory>{item.selectedCategory}</BillCategory>
                          </td>
                          <td
                            style={{
                              textAlign: 'right',
                              borderBottom: '0.4px solid #ADB6BD',
                            }}
                          >
                            <BillAmount>{`${
                              item.billValue >= 10000000
                                ? '9999999+'
                                : item.billValue + '원'
                            }`}</BillAmount>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <BillMemo>
                              {item.memoValue.length > 11
                                ? `${item.memoValue.slice(0, 10)}...`
                                : item.memoValue}
                            </BillMemo>
                          </td>
                          <td>
                            <BillAuthor>{item.whoValue}</BillAuthor>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </BillInfo>
                </Link>
              </BillItem>
            ))}
          </BillList>
          <Btn></Btn>
        </Container>
      </BackgroundDiv>
    </div>
  );
}

const BackgroundDiv = styled.div`
  max-width: 390px;
  min-height: 844px;
  margin: 0 auto;
  padding-top: 24px;
  background-color: #f3f3f3;
  /* padding: 30px; */
`;

const Container = styled.div`
  /* width: 90%; */
  width: 350px;
  min-height: 557px;
  border-radius: 15px;

  margin: 0 auto;
  background: #ffffff;
  padding-bottom: 20px;
`;

const DateInfo = styled.div`
  padding-top: 10px;
`;

const Day = styled.span`
  width: 62px;
  height: 29px;

  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;

  margin-left: 6%;
`;

const Date = styled.span`
  width: 63px;
  height: 17px;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  margin: 15px;

  color: #353a40;
`;

const Table = styled.table`
  width: 100%;
`;

const BillList = styled.div`
  width: 100%;
`;

const BillItem = styled.div`
  width: 304px;
  height: 86px;
  padding: 10px;
  margin: auto;
  border: 0.6px solid #adb6bd;
  border-radius: 6px;
  margin-bottom: 10px;
`;

const CategoryImgStyle = styled.div`
  width: 48px;
  height: 48px;
  margin-top: 10px;
  text-align: center;
  background: #f5f5f5;
  border-radius: 50%;
`;

const BillImage = styled.img`
  width: 28px;
  margin-top: 8px;
  margin 0 auto;

  width: 50%;
  background-color: gery;
`;

const BillAuthor = styled.div`
  margin-top: 10px;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;

  float: right;
`;

const BillCategory = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

  color: #000000;
`;

const BillAmount = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  width: 150px;

  color: #00bc78;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BillMemo = styled.span`
  width: 56px;
  height: 14px;
  top: 267px;
  left: 125px;

  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;

  color: #adb6bd;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

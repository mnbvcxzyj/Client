import React from 'react';
import { styled } from 'styled-components';
import categoryImg from '../../images/BillList/userImg.png';
// 더미 데이터
const billDataset = [
  {
    id: 1,
    emoji: '😢',
    authorName: '박신형',
    userImage: 'user1.jpg',
    category: '식비',
    categoryImg: categoryImg,
    amount: 250000,
    memo: '엄청 맛있는 무언가',
  },
  {
    id: 2,
    emoji: '😢',
    authorName: '박신형2',
    userImage: 'user1.jpg',
    category: '교통',
    categoryImg: categoryImg,
    amount: 990000,
    memo: '엄청 호화로운 무언가',
  },
];

export default function BillListBlock({
  selectedEmoji,
  selectedCategory,
  inputBill,
  inputMemo,
}) {
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
            {billDataset.map((bill) => (
              <BillItem key={bill.id}>
                <BillInfo>
                  <Table>
                    <tr>
                      <td
                        rowSpan={2}
                        style={{
                          textAlign: 'center',
                          width: '23%',
                          verticalAlign: 'middle',
                        }}
                      >
                        <BillImage src={bill.categoryImg} alt={bill.category} />
                      </td>
                      <td
                        style={{
                          width: '50%',
                          borderBottom: '0.4px solid #ADB6BD',
                        }}
                      >
                        <BillCategory>{bill.category}</BillCategory>
                      </td>
                      <td
                        style={{
                          borderBottom: '0.4px solid #ADB6BD',
                        }}
                      >
                        <BillAmount>{bill.amount}원</BillAmount>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <BillMemo>{bill.memo}</BillMemo>
                      </td>
                      <td>
                        <BillAuthor>{bill.authorName}</BillAuthor>
                      </td>
                    </tr>
                  </Table>
                </BillInfo>
              </BillItem>
            ))}
          </BillList>
        </Container>
      </BackgroundDiv>
    </div>
  );
}

const BackgroundDiv = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  padding: 30px;
`;

const Container = styled.div`
  width: 90%;
  height: 557px;
  border-radius: 15px;

  margin: auto;
  background: #ffffff;
`;

const DateInfo = styled.div``;

const Day = styled.span`
  width: 62px;
  height: 29px;

  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;

  margin: 30px;
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
  margin: 30px;
`;

const Table = styled.table`
  width: 100%;
`;

const BillList = styled.div`
  width: 100%;
`;

const BillItem = styled.div`
  width: 80%;
  padding: 10px;
  margin: auto;
  border: 0.6px solid #adb6bd;
  border-radius: 6px;
  margin-bottom: 10px;
`;

const BillImage = styled.img`
  width: 60%;
`;

const BillInfo = styled.div``;

const BillAuthor = styled.div`
  margin-top: 10px;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;

  float: right;
`;

const BillCategory = styled.div`
  width: 43px;
  height: 19px;
  top: 326px;
  left: 126px;

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

  color: #05b70c;
  float: right;
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
`;

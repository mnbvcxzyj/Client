import CategoryImgFood from '../../images/Newbill/food.png';
import CategoryImgHotel from '../../images/Newbill/hotel.png';
import CategoryImgTransportation from '../../images/Newbill/car.png';
import CategoryImgEtc from '../../images/Newbill/etc.png';
import CategoryImgSelf from '../../images/Newbill/white.png';
import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';
import { UserContext } from '../../contexts/UserContext';
import { GroupContext } from '../../contexts/GroupContext';
import { PlanContext } from '../../contexts/PlanContext';

export default function BillListBlock({ groupId, planId }) {
  const [travelDatas, setTravelDatas] = useState([]);

  const { refreshAccessToken } = useAuth();

  const { user } = useContext(UserContext);
  const { group } = useContext(GroupContext);
  const { plan } = useContext(PlanContext);

  const selectedPlan = plan.find(
    (item) => item.planId === parseInt(planId, 10),
  );

  const axiosInstance = useMemo(
    () => createAxiosInstance(refreshAccessToken),
    [refreshAccessToken],
  );

  useEffect(() => {
    const getCotegory = async () => {
      try {
        const response = await axiosInstance.get(
          `/${user.userId}/grouplist/${groupId}/plan/${planId}/category`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          },
        );
        setTravelDatas(response.data);
      } catch (error) {
        console.error('수정하려는 Category 데이터 요청 중 오류 발생:', error);
      }
    };
    getCotegory();
  }, [axiosInstance, user, groupId, planId]);

  const categoryImages = {
    식비: CategoryImgFood,
    숙소: CategoryImgHotel,
    교통비: CategoryImgTransportation,
    기타: CategoryImgEtc,
    직접입력하기: CategoryImgSelf,
  };

  return (
    <div>
      <BackgroundDiv>
        <Container>
          <DateInfo>
            <Day>
              {selectedPlan.nDay}일차
              <Date>
                {selectedPlan.date}({selectedPlan.dayOfWeek})
              </Date>
            </Day>
          </DateInfo>
          <HrDivStyle>
            <hr />
          </HrDivStyle>
          <BillList>
            {travelDatas &&
              travelDatas.map((category, index) => (
                <BillItem key={index}>
                  <Link
                    to={`/billupdate/${groupId}/${planId}/${category.categoryId}`}
                  >
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
                                {category.categoryTitle in categoryImages ? (
                                  <BillImage
                                    src={categoryImages[category.categoryTitle]}
                                    alt={category.categoryTitle}
                                  />
                                ) : (
                                  // 없으면 빈 이미지
                                  <BillImage src="" alt="" />
                                )}
                              </CategoryImgStyle>
                            </td>
                            <td
                              style={{
                                width: '130px',
                                borderBottom: '0.4px solid #ADB6BD',
                              }}
                            >
                              <BillCategory>
                                {category.categoryTitle}
                              </BillCategory>
                            </td>
                            <td
                              style={{
                                textAlign: 'right',
                                borderBottom: '0.4px solid #ADB6BD',
                              }}
                            >
                              <BillAmount
                                value={
                                  category.cost >= 10000000
                                    ? '9999999+'
                                    : category.cost + '원'
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <BillMemo>
                                {category.memo.length > 11
                                  ? `${category.memo.slice(0, 10)}...`
                                  : category.memo}
                              </BillMemo>
                            </td>
                            <td>
                              <BillAuthor>{category.writer}</BillAuthor>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </BillInfo>
                  </Link>
                </BillItem>
              ))}
          </BillList>
          <BtnStyleDiv>
            <NewBtn>
              <NavList to={`/newbill/${group.groupId}/${planId}`}>
                <Plus>+</Plus>
              </NavList>
            </NewBtn>
          </BtnStyleDiv>
        </Container>
      </BackgroundDiv>
    </div>
  );
}

const BackgroundDiv = styled.div`
  max-width: 390px;
  min-height: 700px;
  margin: 0 auto;
  padding-top: 24px;
  background-color: #f3f3f3;
  /* padding: 30px; */
`;

const Container = styled.div`
  /* width: 90%; */
  width: 350px;
  min-height: 657px;
  border-radius: 15px;

  margin: 0 auto;
  background: #ffffff;
  padding: 10px;
`;

const DateInfo = styled.div`
  padding-top: 10px;
`;

const HrDivStyle = styled.div`
  padding: 0px 10px 10px 10px;
  color: #adb6bd;
`;

const Day = styled.span`
  width: 62px;
  height: 29px;

  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;

  margin: 20px;
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

const BtnStyleDiv = styled.div``;

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

  &:after {
    content: '${(props) => props.value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}';
  }
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

const NavList = styled(NavLink)``;

const NewBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 41px;
  height: 41px;
  flex-shrink: 0;
  background-color: #00bc78;
  color: white;
  border-radius: 30px;
  stroke-width: 0.3px;
  stroke: var(--Skyblue, #95bfff);
`;

const Plus = styled.span`
  vertical-align: middle;

  color: white;
  border-radius: 30px;
  stroke-width: 0.3px;
  stroke: var(--Skyblue, #95bfff);

  //글꼴
  font-family: SUIT;
  font-size: 35px;
  font-weight: 350;
`;

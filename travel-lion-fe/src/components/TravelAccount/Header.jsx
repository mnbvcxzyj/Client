import goBack from '../../images/goBack.png';
import share from '../../images/share.png';
import React, { useState, useEffect, useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AU from '../../images/AU.png';
import { AuthContext, useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';

export default function Header({ groupId }) {
  const { user } = useContext(AuthContext);
  const [travelDatas, setTravelDatas] = useState([]);
  const { refreshAccessToken } = useAuth();

  const axiosInstance = useMemo(
    () => createAxiosInstance(refreshAccessToken),
    [refreshAccessToken],
  );

  useEffect(() => {
    if (user) {
      axiosInstance
        .get(`/${user.userId}/grouplist/${groupId}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((response) => {
          setTravelDatas(response.data);
        })
        .catch((error) => {
          console.error('API 요청 중 오류 발생:', error);
        });
    }
  }, [axiosInstance, user, groupId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString('ko-KR', {
        month: '2-digit',
        day: '2-digit',
      })
      .replace('.', '/')
      .replace('.', '');
  };

  return (
    <>
      <HeaderContainer>
        <NavLeft to="/">
          <GoBackImg src={goBack} />
        </NavLeft>
        <TravelInfoDiv>
          <Wrapper1>
            <Image src={AU} alt="국기" />
            <TravelName>{travelDatas.title}</TravelName>
          </Wrapper1>
          <Wrapper2>
            <TravelLocation>{`${travelDatas.nation}-${travelDatas.location} |`}</TravelLocation>
            <TravelDate>
              {formatDate(travelDatas.startDate)} ~
              {formatDate(travelDatas.endDate)}
            </TravelDate>
          </Wrapper2>
        </TravelInfoDiv>
        <Share to="">
          <ShareImg src={share} />
        </Share>
      </HeaderContainer>
    </>
  );
}

// {
//     "groupId": 0,
//     "leader": "string",
//     "member": [
//       {
//         "email": "user@example.com",
//         "nickname": "string"
//       }
//     ],
//     "title": "string",
//     "nation": "string",
//     "location": "string",
//     "startDate": "2023-09-10",
//     "endDate": "2023-09-10",
//     "duration": "string",
//     "budget": 0,
//     "spentMoney": "string",
//     "dday": "string"
//     “editPer”: “boolean”
//   }

const HeaderContainer = styled.div`
  width: 390px;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  background: #00bc78;
  color: #ffffff;
`;

const NavLeft = styled(NavLink)`
  float: left;
  margin: 20px;
`;

const GoBackImg = styled.img`
  width: 22px;
`;

const Share = styled(NavLink)`
  float: right;
  margin: 20px;
`;

const ShareImg = styled.img`
  width: 18px;
  height: 20px;
  top: 52px;
  left: 343px;
`;

const TravelInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 300px;
`;

const Image = styled.img`
  width: 26px;
`;

const TravelName = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 11px;
  white-space: nowrap;
`;

const TravelLocation = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;

const TravelDate = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin-left: 3px;
`;

const Wrapper1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper2 = styled.div`
  display: flex;
  margin-top: 10px;
`;

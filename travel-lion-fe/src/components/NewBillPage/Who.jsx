import React, { useContext } from 'react';
import styled from 'styled-components';
import UserImg from '../../images/BillList/userImg.png';
import { UserContext } from '../../contexts/UserContext';

export default function Who() {
  const { user } = useContext(UserContext);
  return (
    <Component>
      <WriterStyle>
        <Demand>작성자</Demand>
        <tr>
          <td>
            <UserImage src={UserImg} alt="사용자 이미지" />
          </td>
          <td style={{ verticalAlign: 'middle' }}>
            <UserName>{user.nickname}</UserName>
          </td>
        </tr>
      </WriterStyle>
    </Component>
  );
}

const Component = styled.div`
  /* display: flex;
  width: 340px;
  padding: 10px 237px 5px 13px;
  align-items: center;
  margin: 0 auto; */

  display: flex;
  align-items: center;

  /* width: 87%;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 30px; */
`;

const WriterStyle = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  /* text-align: left; */

  color: #525252;
  /* margin-top: 35px; */
`;

const Demand = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  /* text-align: left; */
  margin-bottom: 10px;
  color: #525252;
  /* margin-top: 35px; */
`;

const UserImage = styled.img`
  width: 35px;
  height: 35px;
  /* margin: 3px; */
  /* margin-left: 15px; */
`;

const UserName = styled.span`
  /* width: 42px;
  height: 19px;
  padding: 3px;
  font-weight: bolder;
  color: #353a40; */

  /* font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left; */

  margin-left: 13px;
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

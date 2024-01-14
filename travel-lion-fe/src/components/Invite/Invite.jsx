import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';
import InviteEmail from './InviteEmail';
import InviteAuthority from './InviteAuthority.jsx';
import {
  Container,
  Back,
  Text1,
  Text2,
  DropdownContainer,
  Dropdown,
} from './InviteStyle.js';

//그룹 정보 먼저 불러와서
//총무 수정
function Invite() {
  const { user } = useAuth();
  const [nicknames, setNicknames] = useState([]); //닉네임 배열
  // const [leaderNickname, setLeaderNickname] = useState(''); // 리더 닉네임 상태 변수 추가
  const [newLeaderId, setNewLeaderId] = useState('');
  const location = useLocation();
  const { groupId } = location.state;
  const navigate = useNavigate();

  const goToTravellist = () => {
    navigate('/mypage/travellist');
  };

  //그룹 불러오기
  //userId추가하고 다시 해보기
  useEffect(() => {
    const fetchGroupInfo = async () => {
      try {
        const response = await axios.get(
          `http://13.125.174.198/group/${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
            },
          },
        );
        if (response.data && response.data.member) {
          setNicknames(
            response.data.member.map((member) => ({
              id: member.userId,
              nickname: member.nickname,
            })),
          );
        }
      } catch (error) {
        console.error('Error fetching group info:', error);
      }
    };

    fetchGroupInfo();
  }, [groupId, user?.accessToken]);

  const handleLeaderChange = (event) => {
    setNewLeaderId(event.target.value); //일케 하면 닉네임 들어감.. 바보
  };

  const changeLeader = async () => {
    try {
      const response = await axios.post(
        `http://13.125.174.198/group/${groupId}/set_leader`,
        {
          new_leader_id: newLeaderId,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        },
      );

      // 응답 처리
      console.log('리더 변경 성공: ', response.data);
      // 필요한 경우 상태 업데이트
      // 예시: setLeaderNickname(response.data.leader);
      alert('리더가 성공적으로 변경되었습니다.');
    } catch (error) {
      console.error('리더 변경 중 오류 발생: ', error);
      alert('리더 변경에 실패했습니다.');
    }
  };

  return (
    <Container>
      <Back onClick={goToTravellist}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M13.8647 19.3415L6.14175 11.6415C6.05008 11.5499 5.985 11.4506 5.9465 11.3436C5.908 11.2367 5.88905 11.1221 5.88966 10.9999C5.88966 10.8776 5.90861 10.7631 5.9465 10.6561C5.98438 10.5492 6.04947 10.4499 6.14175 10.3582L13.8647 2.63529C14.0786 2.4214 14.3459 2.31445 14.6667 2.31445C14.9876 2.31445 15.2626 2.42904 15.4917 2.6582C15.7209 2.88737 15.8355 3.15473 15.8355 3.46029C15.8355 3.76584 15.7209 4.0332 15.4917 4.26237L8.75425 10.9999L15.4917 17.7374C15.7056 17.9513 15.8126 18.215 15.8126 18.5285C15.8126 18.842 15.698 19.113 15.4688 19.3415C15.2397 19.5707 14.9723 19.6853 14.6667 19.6853C14.3612 19.6853 14.0938 19.5707 13.8647 19.3415Z"
            fill="#868686"
          />
        </svg>
      </Back>
      <Text1>
        플랜을 누구와
        <br />
        공유하시겠어요?
      </Text1>
      <Text2>초대하기</Text2>
      <InviteEmail groupId={groupId} userAccessToken={user?.accessToken} />

      <Text2>공유 범위</Text2>
      <InviteAuthority groupId={groupId} userAccessToken={user?.accessToken} />

      <Text2>총무 변경</Text2>
      <DropdownContainer>
        <select value={newLeaderId} onChange={handleLeaderChange}>
          {nicknames.map((member, index) => (
            <option key={index} value={member.id}>
              {member.nickname}
            </option>
          ))}
        </select>
      </DropdownContainer>
      <button onClick={changeLeader}>총무 변경</button>
    </Container>
  );
}

export default Invite;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../api/auth/AuthContext';
import { createAxiosInstance } from '../../api/auth/Axios';

//1. 초대코드 보내기
//2. 그룹 정보 먼저 불러와서
//3. 총무 수정
//4. 공유범위
function Invite() {
  const [selectedOption, setSelectedOption] = useState('');
  const [nicknames, setNicknames] = useState([]);
  const { user, refreshAccessToken, setUser } = useAuth();
  const [editPermission, setEditPermission] = useState(false);
  const [leaderNickname, setLeaderNickname] = useState(''); // 리더 닉네임 상태 변수 추가
  const [selectedLeader, setSelectedLeader] = useState(''); //리더 변경을 위한 드롭다운 상태변수
  const [newLeaderId, setNewLeaderId] = useState(''); //새로운 리더 ID를 저장할 상태 변수

  // const userId = user?.userId;

  // const { groupId } = useParams(); // URL 경로에서 groupId 취득
  const location = useLocation();
  const { groupId } = location.state;
  const navigate = useNavigate();
  const goToTravellist = () => {
    navigate('/mypage/travellist');
  };

  //4. 공유범위) 바뀔때마다 post 요청
  //총무: false
  //모두: true
  const handleDropdownChange = async (event) => {
    const newEditPermission = event.target.value === 'all';
    setSelectedOption(event.target.value);
    setEditPermission(newEditPermission);
    // setSelectedOption(event.target.value);

    const editPermission = event.target.value === 'all' ? true : false;

    try {
      const response = await axios.post(
        `http://13.125.174.198/group/${groupId}/set_edit`,
        {
          editPer: editPermission,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        },
      );
      console.log('편집 권한 변경: ', response.data);
      console.log('공유 범위:', editPermission);
    } catch (error) {
      console.error('편집 권한 변경 중 오류 발생: ', error);
    }
  };

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  //이메일로 초대코드 보내기 ok
  const sendInvitation = () => {
    if (isValidEmail) {
      const apiUrl = `http://13.125.174.198/groups/${groupId}/invite/`;
      axios
        .post(
          apiUrl,
          {
            invite_email: email,
          },
          {
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
            },
          },
        )
        .then((response) => {
          alert('초대 메일을 성공적으로 보냈습니다.');
        })
        .catch((error) => {
          console.error('초대 메일을 보내는 동안 에러 발생: ', error);
          alert('초대 메일을 보내는 데 실패했습니다.');
        });
    } else {
      alert('유효한 이메일 주소를 입력해주세요.');
    }
  };

  //그룹 불러오기 ok
  //UUID
  //닉네임
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
        const groupInfo = response.data;
        console.log(response.data);
        if (groupInfo && groupInfo.member) {
          console.log('그룹존재');
          // 멤버의 id와 nickname을 저장합니다.
          setNicknames(
            groupInfo.member.map((member) => ({
              id: member.id,
              nickname: member.nickname,
            })),
          );
          const leader = groupInfo.leader;
          if (leader) {
            setLeaderNickname(leader.nickname); // 현재 리더의 닉네임을 설정합니다.
          }
          console.log('멤버 id', groupInfo.member[0].nickname); //소히 걸푸란
        } else {
          console.error('그룹 정보에 회원 목록이 없습니다.');
        }
      } catch (error) {
        console.error('그룹 정보를 불러오는 중 오류 발생: ', error);
      }
    };

    fetchGroupInfo();
  }, [groupId, user?.accessToken]);

  //새로운 총무
  const handleLeaderChange = (event) => {
    // const selectedMember = nicknames.find(
    //   (nickname) => nickname.id === event.target.value,
    // );
    // setNewLeaderId(selectedMember ? selectedMember.id : '');
    setNewLeaderId(event.target.value); //일케 하면 닉네임 들어감.. 바보
  };

  //총무 변경
  //리더의 UUID 필요
  //리더의 닉네임
  const changeLeader = async () => {
    try {
      console.log('새로운 총무Id', newLeaderId); //닉네임이 들어감
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
      console.log('리더 변경 성공: ', response.data);
      alert('리더가 성공적으로 변경되었습니다.');
    } catch (error) {
      console.error('리더 변경 중 오류 발생: ', error);
      alert('리더를 변경하는 데 실패했습니다.');
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
      <p>초대할 그룹 ID: {groupId}</p>
      <DivEmail>
        <InputEmail
          placeholder="이메일 주소를 입력하세요."
          value={email}
          onChange={handleEmailChange}
        ></InputEmail>
        {isValidEmail && <BtnInvite onClick={sendInvitation}>초대</BtnInvite>}
      </DivEmail>
      <Text2>공유 범위</Text2>
      <DropdownContainer>
        <ArrowIcon />
        <Dropdown value={selectedOption} onChange={handleDropdownChange}>
          <option value="all">모두 수정 가능</option>
          <option value="private">총무만 수정 가능</option>
        </Dropdown>
        <SelectedValue>
          {editPermission ? '모두 수정 가능' : '총무만 수정 가능'}
        </SelectedValue>
      </DropdownContainer>
      <Text2>현재 총무: {leaderNickname}</Text2>
      <Text2>총무 변경</Text2>
      <DropdownContainer>
        <Dropdown value={newLeaderId} onChange={handleLeaderChange}>
          {nicknames.map((member, index) => (
            <option key={index} value={member.id}>
              {member.nickname}
            </option>
          ))}
        </Dropdown>
      </DropdownContainer>
      <button onClick={changeLeader}>총무 변경</button>
    </Container>
  );
}

export default Invite;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 390px;
  margin: auto;
`;

const Back = styled.div`
  margin-top: 47px;
  margin-left: 25px;
`;

const Text1 = styled.div`
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 118.336%; /* 28.401px */
  margin-top: 33px;
  margin-left: 37px;
`;

const Text2 = styled.div`
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 118.336%; /* 16.567px */
  margin-top: 40px;
  margin-left: 31px;
`;

const InputEmail = styled.input`
  border: none;
  outline: none;
  background: #f3f3f3;
  margin-top: 15px;
  margin-left: 15px;
  width: 200px;
`;

const DivEmail = styled.div`
  width: 340px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #f3f3f3;
  margin-top: 7px;
  margin-left: 25px;
`;

const BtnInvite = styled.button`
  display: inline-flex;
  padding: 5px 7px;
  margin: 0px 0px 0px 80px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #00bc78;
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const DropdownContainer = styled.div`
  width: 340px;
  height: 50px;
  margin-top: 20px;
  margin-left: 26px;
  border-radius: 5px;
  border: none;
  background: #f3f3f3;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #adb6bd;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Dropdown = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  //   -moz-appearance: none;
  //   -webkit-appearance: none;
  //   appearance: none;
  background: transparent;
  padding: 0;
  margin: 0;
  font-family: Pretendard;
  font-size: 16px;
  cursor: pointer;
  position: absolute; // DropdownContainer 안에서 절대 위치
  top: 0;
  left: 0;
  opacity: 0; // 드롭다운 요소를 숨김
`;

const ArrowIcon = styled.div`
  position: absolute;
  left: 15px; // 왼쪽에서 15px 떨어진 곳에 위치
  top: 50%;
  transform: translateY(-50%);
`;

const SelectedValue = styled.div`
  position: absolute;
  left: 15px;
  right: 30px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: var(--Darkgray, #353a40);
`;

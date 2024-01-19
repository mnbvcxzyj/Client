import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ButtonContainer, AuthorityButton } from './InviteStyle.js';
import { useAuth } from '../../api/auth/AuthContext';

//모두: YES
//총무만: NO
function InviteAuthority({ groupId, userAccessToken }) {
  const [editPermission, setEditPermission] = useState(false);
  const { user, refreshAccessToken, setUser } = useAuth();

  useEffect(() => {
    console.log('그룹아이디:', groupId);
    const fetchEditPermission = async () => {
      try {
        const response = await axios.get(
          `http://13.125.174.198/group/${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${userAccessToken}`,
            },
          },
        );
        if (response.data) {
          setEditPermission(response.data.editPer);
          console.log('공유범위', response.data.editPer);
        }
      } catch (error) {
        console.error('편집 권한 상태 불러오기 오류:', error);
      }
    };

    fetchEditPermission();
  }, [groupId, userAccessToken]);

  const handleButtonClick = async (permission) => {
    // 현재 상태와 같은 버튼이 눌렸다면 아무것도 하지 않음
    if (permission === editPermission) return;

    setEditPermission(permission);

    try {
      const response = await axios.post(
        `http://13.125.174.198/group/${groupId}/set_edit`,
        {
          editPer: permission,
        },
        {
          headers: {
            Authorization: `Bearer ${userAccessToken}`,
          },
        },
      );
      console.log('편집 권한 변경: ', response.data);
      console.log(
        '공유 범위:',
        editPermission ? '총무만 수정 가능' : '모두 수정 가능',
      );
    } catch (error) {
      // if (error.response && error.response.status === 403) {
      //   // 토큰 만료 오류 처리
      //   try {
      //     const newTokens = await refreshAccessToken();
      //     if (newTokens && newTokens.accessToken) {
      //       setUser({ ...user, accessToken: newTokens.accessToken });
      //       handleButtonClick(permission); // 갱신된 토큰으로 재시도
      //     }
      //   } catch (refreshError) {
      //     console.error('세션 만료 또는 토큰 갱신 오류', refreshError);
      //     // 추가적인 오류 처리 (예: 로그인 페이지로 리디렉션)
      //   }
      // } else {
      //   console.error('편집 권한 변경 중 오류 발생: ', error);
      // }
    }
  };

  return (
    <ButtonContainer>
      <AuthorityButton
        active={editPermission}
        onClick={() => handleButtonClick(true)}
      >
        모두 수정 가능
      </AuthorityButton>
      <AuthorityButton
        active={!editPermission}
        onClick={() => handleButtonClick(false)}
      >
        총무만 수정 가능
      </AuthorityButton>
    </ButtonContainer>
  );
}

export default InviteAuthority;

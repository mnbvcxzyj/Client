// InviteEmail.js
import React, { useState } from 'react';
import axios from 'axios';
import { InputEmail, DivEmail, BtnInvite } from './InviteStyle.js';

function InviteEmail({ groupId, userAccessToken }) {
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
              Authorization: `Bearer ${userAccessToken}`,
            },
          },
        )
        .then(() => {
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

  return (
    <DivEmail>
      <InputEmail
        placeholder="이메일 주소를 입력하세요."
        value={email}
        onChange={handleEmailChange}
      ></InputEmail>
      {isValidEmail && <BtnInvite onClick={sendInvitation}>초대</BtnInvite>}
    </DivEmail>
  );
}

export default InviteEmail;

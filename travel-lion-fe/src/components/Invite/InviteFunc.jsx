// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from '../../api/auth/AuthContext';
// import { createAxiosInstance } from '../../api/auth/Axios';

// const InviteFunc = () => {
//   //초대코드 보내기 ok
//   const sendInvitation = () => {
//     if (isValidEmail) {
//       const apiUrl = `http://13.125.174.198/groups/${groupId}/invite/`;
//       axios
//         .post(
//           apiUrl,
//           {
//             invite_email: email,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${user?.accessToken}`,
//             },
//           },
//         )
//         .then((response) => {
//           alert('초대 메일을 성공적으로 보냈습니다.');
//         })
//         .catch((error) => {
//           console.error('초대 메일을 보내는 동안 에러 발생: ', error);
//           alert('초대 메일을 보내는 데 실패했습니다.');
//         });
//     } else {
//       alert('유효한 이메일 주소를 입력해주세요.');
//     }
//   };
// };

// export default InviteFunc;

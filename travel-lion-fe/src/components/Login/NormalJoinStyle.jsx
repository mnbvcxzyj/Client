import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BigDiv = styled.div`
  width: 340px;
  margin-left: auto;
  margin-right: auto;
`;

const Join = styled.div`
  position: relative;
  color: var(--Darkgray, #353a40);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: auto;
  margin-right: auto;
  margin-top: 74px;
  margin-bottom: 75px;
  display: flex;
  justify-content: center;
`;

const EmailBox = styled.div`
  position: relative;
  width: 340px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */

  span {
    display: inline-block;
  }
  border: 1.5px solid
    ${(props) => (props.isEmail ? '#00bc78' : 'var(--Gray, #adb6bd)')};
`;

const Box = styled.div`
  position: relative;
  width: 340px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */

  span {
    display: inline-block;
  }

  /* 비밀번호 */
  border: ${(props) =>
    props.isPassword || props.isPasswordConfirm
      ? '1.5px solid #00bc78'
      : '1.5px solid var(--Gray, #adb6bd)'};
`;

const WarningMessage = styled.span`
  position: relative;
  display: flex;
  color: #ff2e3b;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 6px;
  color: ${(props) => (props.isSuccess ? '#00bc78' : '#ff2e3b')};
`;

const SendBtn = styled.div`
  display: inline-flex;
  padding: 5px 7px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #00bc78;
  cursor: pointer;
  position: absolute;
  margin-left: 291px;
`;

const NewSendBtn = styled.div`
  display: inline-flex;
  padding: 5px 7px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: #00bc78;
  cursor: pointer;
  position: absolute;
  margin-left: 291px;
`;

const SentText = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CountDown = styled.span`
  color: #f00;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const EmailInput = styled.input`
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none; /* 테두리를 없앱니다. */
  outline: none; /* 포커스 테두리를 없앱니다. */
  position: relative;
  left: 25px;
`;

const PasswdInput = styled.input`
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none; /* 테두리를 없앱니다. */
  outline: none; /* 포커스 테두리를 없앱니다. */
  position: relative;
  left: 25px;
`;

const CheckPasswdInput = styled.input`
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none; /* 테두리를 없앱니다. */
  outline: none; /* 포커스 테두리를 없앱니다. */
  position: relative;
  left: 25px;
`;

const CheckNumInput = styled.input`
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none; /* 테두리를 없앱니다. */
  outline: none; /* 포커스 테두리를 없앱니다. */
  position: relative;
  left: 25px;
`;

const CheckText = styled.span`
  position: relative;
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CheckBtn = styled.span`
  color: var(--Gray, #adb6bd);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-right: 9px;
  margin-top: 5px;
`;

const CheckDiv = styled.div`
  position: relative;
  margin-bottom: 32px;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
`;

const Btn = styled.div`
  width: 340px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #e2e2e2;
  display: flex; /* Flexbox를 사용하여 내부 요소를 가운데 정렬합니다. */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center;
`;

const BtnText = styled.div`
  color: #979797;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

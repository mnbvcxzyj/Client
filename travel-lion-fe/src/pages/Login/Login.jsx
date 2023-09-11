import React from 'react';

const Id = styled.div`
  border-radius: 10px;
  border: 1.5px solid var(--Gray, #adb6bd);
  width: 340px;
  height: 45px;
  flex-shrink: 0;
`;

const Passwd = styled.div`
  border-radius: 10px;
  border: 1.5px solid var(--Gray, #adb6bd);
  width: 340px;
  height: 45px;
  flex-shrink: 0;
`;

function Login() {
  return (
    <div>
      <Id></Id>
      <Passwd></Passwd>
    </div>
  );
}

export default Login;

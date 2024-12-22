import { useState } from 'react';

const useUserInfo = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return {
    username,
    setUsername,
    password,
    setPassword,
  };
};

export default useUserInfo;

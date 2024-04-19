import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from 'api/auth';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    if (username.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    const { success, authToken } = await login({ username, password });
    if (success) {
      localStorage.setItem('authToken', authToken);
      // 登入成功提示訊息
      Swal.fire({
        title: '登入成功',
        icon: 'success',
        showConfirmButton: false, //不顯示確認按鈕
        timer: 1500,
        position: 'top', //提示訊息位置
      });
      navigate('/todo');
      return;
    }
    // 登入失敗提示訊息
    Swal.fire({
      title: '登入失敗',
      icon: 'error',
      showConfirmButton: false,
      timer: 1500,
      position: 'top',
    });
  };

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>登入 Todo</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          value={username}
          placeholder="請輸入帳號"
          onChange={(nameInputValue) => setUsername(nameInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label="密碼"
          value={password}
          text={password}
          placeholder="請輸入密碼"
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>登入</AuthButton>
      <Link to="/signup">
        <AuthLinkText>註冊</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;

import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { register } from 'api/auth';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleClick = async () => {
    if (username.length === 0) {
      return;
    }
    if (email.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    const { success, authToken } = await register({
      username,
      email,
      password,
    });
    if (success) {
      localStorage.setItem('authToken', authToken);
      // 登入成功提示訊息
      Swal.fire({
        title: '註冊成功',
        icon: 'success',
        showConfirmButton: false, //不顯示確認按鈕
        timer: 1500,
        position: 'top', //提示訊息位置
      });
      return;
    }
    // 登入失敗提示訊息
    Swal.fire({
      title: '註冊失敗',
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
      <h1>建立您的帳號</h1>

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
          label="Email"
          value={email}
          text={email}
          placeholder="請輸入 email"
          onChange={(emailInputValue) => setEmail(emailInputValue)}
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
      <AuthButton onClick={handleClick}>註冊</AuthButton>
      <Link to="/login">
        <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default SignUpPage;

import AuthForm from "./AuthForm";
import * as Auth from './Auth';

const Login = ({ handleLogin }) => {

  return (
    <AuthForm title="Вход" btnName="Войти" onSubmit={Auth.authorize} status="авторизация" handleLogin={handleLogin} />
  )
}

export default Login;
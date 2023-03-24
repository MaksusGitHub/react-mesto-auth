import AuthForm from "./AuthForm";
import * as Auth from './Auth';
import { Link } from "react-router-dom";

const Register = ({ setIsAuthSuccess, handleAuthResultPopupOpen}) => {
  return (
    <div className="auth__register-container">
      <AuthForm
        title="Регистрация"
        btnName="Зарегистрироваться"
        onSubmit={Auth.register}
        status="регистрация"
        setIsAuthSuccess={setIsAuthSuccess}
        handleAuthResultPopupOpen={handleAuthResultPopupOpen}
      />
      <Link to="/signin" className="auth__redirect-to-signin">Уже зарегистрированы? Войти</Link>
    </div>
  )
}

export default Register;
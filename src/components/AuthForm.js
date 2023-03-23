const AuthForm = (props) => {
  const {
    title,
    btnName
  } = props;
  return (
    <div className="auth">
      <h2 className="auth__title">{title}</h2>
      <form className="auth__form" noValidate>
        <fieldset className="auth__fieldset">
          <label className="auth__field">
            <input
              id="email-input"
              name="userEmail"
              className="auth__input auth__input_type_email"
              type="email"
              // value={}
              // onChange={handleName}
              placeholder="Email"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="name-input-error auth__error"></span>
          </label>
          <label className="auth__field">
            <input
              id="password-input"
              name="userPassword"
              className="auth__input auth__input_type_password"
              type="password"
              // value={description || ''}
              // onChange={handleDescription}
              placeholder="Пароль"
              minLength="8"
              maxLength="40"
              required
            />
            <span className="status-input-error auth__error"></span>
          </label>
        </fieldset>
        <button className="auth__button" type="submit">{btnName}</button>
      </form>
    </div>
  )
}

export default AuthForm;
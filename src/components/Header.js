import headerLogo from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header root__content">
      <img className="header__logo" src={headerLogo} alt="Логотип"/>
    </header>
  )
}

export default Header;
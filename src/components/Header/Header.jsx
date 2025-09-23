import "./Header.css";
import Logo from '@assets/images/Header-Logo.svg';
export default function Header(){
  return(
    <>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <a href=""><img src={Logo} alt="" /></a>
            </div>
            <nav className="header-nav">
              <a href="#catalog" className="header-nav-link">Каталог</a>
              <a href="#aboutcompany" className="header-nav-link">О компании</a>
              <a href="#contacts" className="header-nav-link">Контакты</a>
            </nav>
            <a href="#bid" className="get-consultation">Получить консультацию</a>
          </div>
        </div>
      </header>
    </>
  )
}
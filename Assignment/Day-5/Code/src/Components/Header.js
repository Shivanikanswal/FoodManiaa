import Logo from "../utils/img/appLogo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="App logo" className="logo" />
      </div>
      <div className="nav-items">
        <ol>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ol>
      </div>
    </div>
  );
};

export default Header;

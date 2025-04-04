
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
  
       <div className="logo-container">
        <img 
        className="logo"
        // src="https://www.logodesign.net/logo/cheese-burger-with-lettuce-and-cheese-2697ld.png?size=large"/>
        src={LOGO_URL} />
       </div>
        
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
  
      </div>
    );
  };

    export default Header;

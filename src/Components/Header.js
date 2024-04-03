import FoodFireLogo from "../Images/Food Fire Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>LogIN</button> : <button onClick={() => setIsLoggedIn(true)}>LogOut</button>}
        </ul>
      </div>
    </div>
  );
};

export default Header;

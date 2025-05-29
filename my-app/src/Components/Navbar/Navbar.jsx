import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.webp';
import cartIcon from '../Assets/shopping-cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
const {getTotalCartItems}=useContext(ShopContext);
  const menuItems = [
    { label: 'Shop', path: '/' },
    { label: 'Men', path: '/men' },
    { label: 'Women', path: '/women' },
    { label: 'Kid', path: '/kid' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" className="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.label} onClick={() => setMenu(item.label.toLowerCase())}>
            <Link to={item.path}>
              {item.label}
            </Link>
            {menu === item.label.toLowerCase() && <hr />}
          </li>
        ))}
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/cart" className="cart-icon-wrapper">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
          <div className="cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

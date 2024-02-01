import './Header.css';
import { useState } from 'react';
import logo from '../../../src/img/logo.png';

function Header() {
  const [now, setNow] = useState(new Date());
  
  setInterval(() => setNow(new Date()), 1000);
  return (
      <header className="Header">
        <img src={logo} alt='logo' className='logo'/>
        <h2>Project </h2>
        <span>Date: {now.toLocaleDateString()}</span>
        <span>Time: {now.toLocaleTimeString()}</span>
      </header>
  );
}

export default Header;
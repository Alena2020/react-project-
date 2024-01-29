import logo from '../../src/img/logo.png';

function Header() {
  const now = new Date();
  
  return (
      <header className="Header">
        <img src={logo} alt='logo' className='logo'/>
        <h2>Project </h2>        
        <h3>What is your main focus for today?</h3>
        <span>Date: {now.toLocaleDateString()}</span>
        <span>Time: {now.toLocaleTimeString()}</span>
      </header>
  );
}

export default Header;
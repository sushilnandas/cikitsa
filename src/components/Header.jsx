import '../CSS/Header.css'
const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <img src="https://www.oncarecancer.com/images/logo.jpeg" alt='Oncare Logo' />
        </div>
        <button className="btn-primary" id='btnalternate'>
          📞 8448832028
        </button>
      </div>
    </header>
  );
};

export default Header;

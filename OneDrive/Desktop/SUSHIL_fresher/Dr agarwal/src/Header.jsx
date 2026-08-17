import React from 'react'

const Header = () => {
  return (
    <div>  <header className="header">
        <div className="header-content">
          <div className="logo">
            {/* Real logo URL from Dr Agarwals */}
            <img src="https://www.dragarwal.com/wp-content/themes/dragarwal/images/Agarwal-logo.svg" alt="Dr Agarwals Eye Hospital" />
          </div>
          <div className="header-right">
            <a href="tel:9594900537" className="phone-pill">
              <span className="phone-icon">📞</span> 9594900537
            </a>
            <select className="language-select">
              <option value="en">🌐 English</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
        </div>
      </header></div>
    
  )
}

export default Header
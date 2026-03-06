// import React, {} from "react";

const CusHeader = () => {
  return (
    <header className="cus-header-area">
      <div className="cus-container">
        <div className="cus-row md:flex md:justify-between text-center md:text-left">
          <div className="cus-header-logo">
            <a href="index.html">CS — Ticket System</a>
          </div>
          <div className="cus-header-content md:flex md:gap-8">
            <div className="cus-header-mainmenu">
              <nav className="za-mobile-menu-active">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Changelog</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Download</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="cus-header-button hidden lg:block">
              <a className="cus-btn"> + New Ticket</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CusHeader;

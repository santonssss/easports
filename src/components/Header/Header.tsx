import React, { useState, useEffect } from "react";
import "./Header.css";
import header_logo from "./img/header-logo.svg";
import header_sign from "./img/header-sign.png";
import SelectAutoWidth from "../../UI/Select";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header className="header">
      <div className="container">
        <div className={`header__inner ${isOpen ? "active" : ""}`}>
          <div className="header__logo">
            <img src={header_logo} alt="logotype" />
          </div>
          <nav className={`header__nav ${isOpen ? "active" : ""}`}>
            <div className="header__nav-inner">
              <ul className="header__nav-items">
                <li className="header__nav-item">
                  <div className="header__nav-item-img">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.13135 15.75V10.2C7.13135 9.77996 7.13135 9.56994 7.2131 9.40951C7.285 9.26839 7.39974 9.15365 7.54086 9.08175C7.70129 9 7.91131 9 8.33135 9H10.4314C10.8514 9 11.0614 9 11.2218 9.08175C11.363 9.15365 11.4777 9.26839 11.5496 9.40951C11.6314 9.56994 11.6314 9.77996 11.6314 10.2V15.75M1.88135 7.125L8.66135 2.04C8.91954 1.84635 9.04864 1.74953 9.19043 1.71221C9.31558 1.67926 9.44712 1.67926 9.57228 1.71221C9.71406 1.74953 9.84316 1.84635 10.1014 2.04L16.8814 7.125M3.38135 6V13.35C3.38135 14.1901 3.38135 14.6101 3.54484 14.931C3.68865 15.2132 3.91812 15.4427 4.20037 15.5865C4.52123 15.75 4.94127 15.75 5.78135 15.75H12.9814C13.8214 15.75 14.2415 15.75 14.5623 15.5865C14.8446 15.4427 15.0741 15.2132 15.2179 14.931C15.3814 14.6101 15.3814 14.1901 15.3814 13.35V6L10.8214 2.58C10.305 2.19271 10.0468 1.99906 9.7632 1.92442C9.5129 1.85853 9.2498 1.85853 8.9995 1.92442C8.71593 1.99906 8.45774 2.19271 7.94135 2.58L3.38135 6Z"
                        stroke="rgba(147, 149, 184, 1)"
                        stroke-width="1.35"
                        className="header__nav-path"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <a className="header__nav-link" href="#">
                    Лента
                  </a>
                </li>{" "}
                <li className="header__nav-item">
                  <div className="header__nav-item-img">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3816 6.75V4.5C12.3816 2.84315 11.0385 1.5 9.38163 1.5C7.72477 1.5 6.38162 2.84315 6.38162 4.5V6.75M3.07563 7.76397L2.62563 12.564C2.49768 13.9287 2.43371 14.6111 2.66016 15.1382C2.8591 15.6012 3.20771 15.984 3.65014 16.2253C4.15377 16.5 4.83915 16.5 6.20991 16.5H12.5533C13.9241 16.5 14.6095 16.5 15.1131 16.2253C15.5555 15.984 15.9042 15.6012 16.1031 15.1382C16.3295 14.6111 16.2656 13.9287 16.1376 12.564L15.6876 7.76397C15.5796 6.61151 15.5256 6.03528 15.2664 5.59962C15.0381 5.21594 14.7009 4.90883 14.2976 4.71738C13.8396 4.5 13.2609 4.5 12.1033 4.5L6.65991 4.5C5.50239 4.5 4.92363 4.5 4.46569 4.71738C4.06237 4.90883 3.72513 5.21594 3.49687 5.59962C3.23769 6.03528 3.18367 6.61151 3.07563 7.76397Z"
                        stroke="#9395B8"
                        className="header__nav-path"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <a className="header__nav-link" href="#">
                    Маркетплейс
                  </a>
                </li>{" "}
                <li className="header__nav-item">
                  <div className="header__nav-item-img">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8813 15.75V14.25C16.8813 12.8521 15.9253 11.6775 14.6313 11.3445M12.0063 2.46807C13.1058 2.91311 13.8813 3.99098 13.8813 5.25C13.8813 6.50902 13.1058 7.58689 12.0063 8.03193M13.1313 15.75C13.1313 14.3522 13.1313 13.6533 12.903 13.1019C12.5985 12.3669 12.0145 11.7828 11.2794 11.4784C10.7281 11.25 10.0292 11.25 8.63135 11.25H6.38135C4.98352 11.25 4.28461 11.25 3.7333 11.4784C2.99821 11.7828 2.41419 12.3669 2.10971 13.1019C1.88135 13.6533 1.88135 14.3522 1.88135 15.75M10.5063 5.25C10.5063 6.90685 9.1632 8.25 7.50635 8.25C5.84949 8.25 4.50635 6.90685 4.50635 5.25C4.50635 3.59315 5.84949 2.25 7.50635 2.25C9.1632 2.25 10.5063 3.59315 10.5063 5.25Z"
                        stroke="#9395B8"
                        className="header__nav-path"
                        stroke-width="1.35"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <a className="header__nav-link" href="#">
                    Рейтинги
                  </a>
                </li>{" "}
                <li className="header__nav-item">
                  <div className="header__nav-item-img">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.38135 11.25C6.89607 11.25 4.88135 9.23528 4.88135 6.75V2.58333C4.88135 2.27295 4.88135 2.11775 4.92658 1.99348C5.0024 1.78516 5.16651 1.62105 5.37483 1.54523C5.4991 1.5 5.65429 1.5 5.96468 1.5H12.798C13.1084 1.5 13.2636 1.5 13.3879 1.54523C13.5962 1.62105 13.7603 1.78516 13.8361 1.99348C13.8813 2.11775 13.8813 2.27295 13.8813 2.58333V6.75C13.8813 9.23528 11.8666 11.25 9.38135 11.25ZM9.38135 11.25V13.5M13.8813 3H15.7563C16.1058 3 16.2805 3 16.4184 3.05709C16.6021 3.13321 16.7481 3.27922 16.8243 3.46299C16.8813 3.60082 16.8813 3.77554 16.8813 4.125V4.5C16.8813 5.19748 16.8813 5.54622 16.8047 5.83234C16.5966 6.6088 15.9901 7.21528 15.2137 7.42333C14.9276 7.5 14.5788 7.5 13.8813 7.5M4.88135 3H3.00635C2.65689 3 2.48216 3 2.34434 3.05709C2.16056 3.13321 2.01456 3.27922 1.93844 3.46299C1.88135 3.60082 1.88135 3.77554 1.88135 4.125V4.5C1.88135 5.19748 1.88135 5.54622 1.95801 5.83234C2.16607 6.6088 2.77255 7.21528 3.549 7.42333C3.83513 7.5 4.18387 7.5 4.88135 7.5M5.96468 16.5H12.798C12.9821 16.5 13.1313 16.3508 13.1313 16.1667C13.1313 14.6939 11.9374 13.5 10.4647 13.5H8.29801C6.82525 13.5 5.63135 14.6939 5.63135 16.1667C5.63135 16.3508 5.78059 16.5 5.96468 16.5Z"
                        stroke="#9395B8"
                        className="header__nav-path"
                        stroke-width="1.35"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <a className="header__nav-link" href="#">
                    Cоревнования
                  </a>
                </li>{" "}
                <li className="header__nav-item">
                  <div className="header__nav-item-img">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.63135 15.7502H16.1313M4.88135 13.5002V7.50016M7.88135 13.5002V7.50016M10.8813 13.5002V7.50016M13.8813 13.5002V7.50016M15.3813 5.25016L9.69935 1.69891C9.58398 1.62681 9.5263 1.59076 9.46444 1.5767C9.40974 1.56428 9.35295 1.56428 9.29825 1.5767C9.23639 1.59076 9.17871 1.62681 9.06335 1.69891L3.38135 5.25016H15.3813Z"
                        stroke="#9395B8"
                        stroke-width="1.35"
                        className="header__nav-path"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <a className="header__nav-link" href="#">
                    Органицазии
                  </a>
                </li>{" "}
                <li className="header__nav-item">
                  <div className="header__nav-item-img">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5633 5.81956C14.3207 7.57692 14.3207 10.4262 12.5633 12.1835M6.19937 12.1835C4.44201 10.4261 4.44201 7.5769 6.19937 5.81954M4.07805 14.3048C1.14911 11.3759 1.14911 6.62717 4.07805 3.69824M14.6846 3.69828C17.6136 6.62721 17.6136 11.3759 14.6846 14.3049M10.8813 9.00154C10.8813 9.82997 10.2098 10.5015 9.38135 10.5015C8.55292 10.5015 7.88135 9.82997 7.88135 9.00154C7.88135 8.17312 8.55292 7.50154 9.38135 7.50154C10.2098 7.50154 10.8813 8.17312 10.8813 9.00154Z"
                        stroke="#9395B8"
                        stroke-width="1.38462"
                        className="header__nav-path"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <a className="header__nav-link" href="#">
                    Live
                  </a>
                </li>
              </ul>
              <div className="header__nav-left-box">
                <div className="header__nav-lang-box">
                  <SelectAutoWidth />
                </div>
                <div className="header__nav-sign">
                  <img src={header_sign} alt="" />
                  <div className="header__nav-sign-links">
                    <a href="#" className="header__nav-sign-link-1">
                      Зарегестрироваться
                    </a>
                    <a href="#" className="header__nav-sign-link-2">
                      Войти
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <button
            onClick={toggleMenu}
            className={`header-burger-btn ${isOpen ? "active" : ""}`}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

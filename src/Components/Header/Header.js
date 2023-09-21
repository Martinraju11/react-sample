import React from "react";
import "./Header.css";
import { MdLocationOn, MdOutlineAccountCircle } from "react-icons/md";
import { LuLanguages } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  let nv = useNavigate();
  const goToHome = () => {
    window.scrollTo(0, 0);
    nv("/");
  };
  return (
    <header>
      <div className="logo" onClick={goToHome} style={{ cursor: "pointer" }}>
        <img
          src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"
          alt="logo"
        />
      </div>

      <nav>
        <ul>
          <li>NEW CARS</li>
          <li>USED CARS</li>
          <li>REVIEWS & NEWS</li>
        </ul>
      </nav>
      <div className="head-middle">
        <div className="head-right">
          <div className="head-input">
            <input type="text" placeholder="Search" />
          </div>
          <div className="head-icons">
            <MdLocationOn />
            <LuLanguages />
            <MdOutlineAccountCircle />
          </div>
        </div>
      </div>
    </header>
  );
};

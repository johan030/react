import React from "react";
import "../styles/components/header.scss";
import Login from "./Login";
import Navigation from "./Navigation";
import Register from "./Register";

const Header = () => {
  return (
    <>
      <div className="Header">
        <Navigation />
        <div className="Title">
            
        </div>
        
        <Login />
      </div>
    </>
  );
};

export default Header;

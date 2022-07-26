import React from "react";
import "../styles/components/header.scss";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <div className="Header">
        <Navigation />
        <div className="Title">
            <h1>Travel Website</h1>
        </div>
      </div>
    </>
  );
};

export default Header;

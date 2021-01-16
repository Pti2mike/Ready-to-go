import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon="space-shuttle" className="space-shuttle" />
      <h1>Ready to go</h1>
    </div>
  );
};

export default Header;

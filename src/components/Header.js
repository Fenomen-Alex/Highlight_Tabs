import React from 'react';
import Tab from "./Tab";

const Header = () => {
  return (
    <div className="tabs">
      <Tab title="Home"/>
      <Tab title="About"/>
      <Tab title="Features"/>
    </div>
  );
};

export default Header;

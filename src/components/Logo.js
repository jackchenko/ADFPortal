import React from 'react';
import logo from './banner.png';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src={logo}
      width="auto"
      height="60px"
      {...props}
    />
  );
};

export default Logo;

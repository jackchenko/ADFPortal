import React from 'react';
import logo from './logo.png';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src={logo}
      {...props}
    />
  );
};

export default Logo;

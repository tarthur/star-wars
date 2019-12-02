import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import logo from '../../assets/images/logo.png';


const Logo = ({ classes }) => {
  return (
    <h3 className={cn(classes)}>
      <Link to="/">
        <img src={logo} className="img-fluid" />
      </Link>
    </h3>
  )
};

export default Logo;
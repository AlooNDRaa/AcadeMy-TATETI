import React from 'react';
import ModeToggle from "../components/functions/ModeToggle";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to="/" className='textHeader'>
      SillyCutePage 
      </Link>
      <div className="">
        <ModeToggle/>
      </div>
    </header>
  );
};

export default Header;

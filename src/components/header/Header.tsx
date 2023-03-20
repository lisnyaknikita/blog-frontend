import React from 'react';

import logo from '../../assets/images/logo.svg';

import classes from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <div>
          <button className={classes.logo}>
            <img src={logo} alt='logo' />
          </button>
        </div>
        <div className={classes.buttons}>
          <button>Увійти</button>
          <button>Зареєструватися</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

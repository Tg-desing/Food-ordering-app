import React from 'react';
import classes from './header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <React.Fragment>
      <heaeder className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClickCartButton}></HeaderCartButton>
      </heaeder>
      <div className={classes['main-image']}>
        <img src={mealsImage} />
      </div>
    </React.Fragment>
  );
}

export default Header;

import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../assets/Images/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyLogo"/>
    </div>
);

export default logo;
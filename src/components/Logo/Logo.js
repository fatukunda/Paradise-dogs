import React from 'react';
import brandLogo from '../../assets/images/logo.svg';
import classes from './Logo.css';
const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={brandLogo} alt = 'Paradise Dogs'/>
        </div>

    )
};
export default logo;
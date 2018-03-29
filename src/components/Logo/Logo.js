import React from 'react';
import brandLogo from '../../assets/images/logo.svg';
import classes from './Logo.css';
import {Link} from 'react-router-dom';
const logo = () => {
    return (
        <div className={classes.Logo}>
            <Link to = '/'>
            <img src={brandLogo} alt = 'Paradise Dogs'/>
            </Link>
        </div>

    )
};
export default logo;
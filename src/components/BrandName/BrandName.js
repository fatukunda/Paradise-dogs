import React from 'react';
import classes from './BrandName.css';
import {Link} from 'react-router-dom';
const brandName = () => {
    return (
        <Link to = '/'>
        <div className={classes.BrandName}>
            <h4>Paradise Dogs</h4>
        </div>
        </Link>
    )
};
export default brandName;
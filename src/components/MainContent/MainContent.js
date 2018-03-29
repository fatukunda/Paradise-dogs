import React from 'react';
import classes from './MainContent.css';
import Dogs from './Dogs/Dogs';
const main = () =>{
    return (
        <div className={classes.MainContent}>
            <Dogs/>
        </div>
    )
};
export default main;
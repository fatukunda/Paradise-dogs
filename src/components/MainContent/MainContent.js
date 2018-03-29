import React from 'react';
import classes from './MainContent.css';
import Dogs from './Dogs/Dogs';
import Contact from '../Contact/Contact';
import {Route, Link} from 'react-router-dom';
const main = () =>{
    return (
        <div className={classes.MainContent}>
            <Route path='/' exact component = {Dogs}/>
            <Route path='/shop' exact component = {Dogs}/>
            <Route path='/contact' exact component ={Contact}/>
        </div>
    )
};
export default main;
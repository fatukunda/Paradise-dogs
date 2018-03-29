import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import Aux from '../../hoc/Auxillary/Auxillary';
import classes from './NavigationItems.css';
const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link = '/shop'>Shop</NavigationItem>
            <NavigationItem link = '/about'>About</NavigationItem>
            <NavigationItem link = '/contact'>Contact</NavigationItem>
        </ul>

    )
};
export default navigationItems;
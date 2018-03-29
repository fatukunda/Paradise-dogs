import React from 'react';
import classes from './Navigation.css';
import Logo from '../Logo/Logo';
import Brand from '../BrandName/BrandName';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
const navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <Logo/>
            <Brand/>
            <NavigationItems/>
        </nav>
    )
};
export default navigation;
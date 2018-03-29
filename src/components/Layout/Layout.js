import React from 'react';
import classes from './Layout.css';
import Navigation from '../Navigation/Navigation';
import Main from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

const layout = () => {
    return (
        <div className={classes.Layout}>
            <Navigation/>
            <Main/>
            <Footer/>
        </div>
    )
};
export default layout;